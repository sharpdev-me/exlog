import { CharStreams, CommonTokenStream, ParserRuleContext, RuleDependency, CharStream, ConsoleErrorListener, ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";
import { AbstractParseTreeVisitor, ParseTreeWalker } from "antlr4ts/tree";

import { ExtLogicParserListener } from "./antlr/ExtLogicParserListener";
import { ExtLogicLexer } from "./antlr/ExtLogicLexer";

import { AdditiveExpressionContext, ArgumentsExpressionContext, AssignmentExpressionContext, AssignmentOperatorExpressionContext, DivideAssignOperatorContext, EndStatementContext, EqualityExpressionContext, ExtLogicParser, IdentifierExpressionContext, LiteralExpressionContext, LogicalAndExpressionContext, LogicalOrExpressionContext, MinusAssignOperatorContext, ModulusAssignOperatorContext, MultiplicativeExpressionContext, MultiplyAssignOperatorContext, NotExpressionContext, ParenthesizedExpressionContext, PlusAssignOperatorContext, PostDecrementExpressionContext, PostIncrementExpressionContext, PreDecrementExpressionContext, PreIncrementExpressionContext, ProgramContext, RelationalExpressionContext, ReservedContext, UnaryMinusExpressionContext } from "./antlr/ExtLogicParser";
import { SourceElementsContext } from "./antlr/ExtLogicParser";
import { SourceElementContext } from "./antlr/ExtLogicParser";
import { StatementContext } from "./antlr/ExtLogicParser";
import { BlockContext } from "./antlr/ExtLogicParser";
import { StatementListContext } from "./antlr/ExtLogicParser";
import { ImportStatementContext } from "./antlr/ExtLogicParser";
import { VariableStatementContext } from "./antlr/ExtLogicParser";
import { VariableModifierContext } from "./antlr/ExtLogicParser";
import { VariableDeclarationContext } from "./antlr/ExtLogicParser";
import { FunctionDeclarationContext } from "./antlr/ExtLogicParser";
import { FormalParameterListContext } from "./antlr/ExtLogicParser";
import { FormalParameterArgContext } from "./antlr/ExtLogicParser";
import { FunctionBodyContext } from "./antlr/ExtLogicParser";
import { ReturnStatementContext } from "./antlr/ExtLogicParser";
import { ArgumentsContext } from "./antlr/ExtLogicParser";
import { ArgumentContext } from "./antlr/ExtLogicParser";
import { SingleExpressionContext } from "./antlr/ExtLogicParser";
import { AssignmentOperatorContext } from "./antlr/ExtLogicParser";
import { LiteralContext } from "./antlr/ExtLogicParser";
import { EmptyStatementContext } from "./antlr/ExtLogicParser";
import { ExpressionStatementContext } from "./antlr/ExtLogicParser";
import { IfStatementContext } from "./antlr/ExtLogicParser";
import { IdentifierContext } from "./antlr/ExtLogicParser";
import { WhileStatementContext } from "./antlr/ExtLogicParser";
import { idText } from "typescript";
import { existsSync, readFile, readFileSync } from "fs";

import * as path from "path";
import { rejects } from "assert";
import { get } from "./std";

const functionList: {[key: string]: FunctionDeclaration} = {};

const programStatements: StatementContext[] = [];

let expressionID = 0;

let _error: string;

const alreadyImported: {[imp: string]: boolean} = {};

function isInFunction(ctx: ParserRuleContext): boolean {
    let _parent = ctx.parent;
    if(!(_parent instanceof StatementContext)) {
        if(_parent instanceof IfStatementContext || _parent instanceof WhileStatementContext) return isInFunction(_parent);
        console.error(`internal error: somehow managed to check if a non-statement is in a function`);
        process.exit(1);
    }
    let parent = _parent.parent;
    if(parent instanceof SourceElementContext) {
        let parent_ = parent.parent;
        if(parent_ instanceof SourceElementsContext) {
            return parent_.parent instanceof FunctionBodyContext;
        }
    } else if(parent instanceof StatementListContext) {
        let parent_ = parent.parent;
        return parent_ instanceof BlockContext;
    }
    return false;

}

function compilerError(ctx: ParserRuleContext, message: string) {
    _error = `error: (${ctx.start.line}:${ctx.start.charPositionInLine}): ${message}`;
    console.error(_error);
    process.exit(1);
}

function compilerWarning(ctx: ParserRuleContext, message: string) {
    console.log(`warning: (${ctx.start.line}:${ctx.start.charPositionInLine}): ${message}`);
}

class FunctionDeclaration {
    constructor(
        public parameters: IdentifierContext[],
        public name: string,
        public statements: StatementContext[],
    ) { }
}

class ImportListener implements ExtLogicParserListener {
    private errored: boolean = false;
    private result: string = "";
    constructor(public depsPath: string, public callback: (err: string | undefined, value: string | undefined) => void) { }
    async enterImportStatement(ctx: ImportStatementContext) {
        if(this.errored) return;
        const importName = ctx.StringLiteral().text.replace(/"/g, "");
        const std = get(importName);
        if(alreadyImported[std] === true) return;
        if(std !== undefined) {
            this.result += std + "\n";
            alreadyImported[std] = true;
            return;
        }
        const dependencyPath = path.resolve(this.depsPath, importName.indexOf(".exlog") == -1 ? importName + ".exlog" : importName);
        if(alreadyImported[dependencyPath] === true) return;

        if(!existsSync(dependencyPath)) {
            this.errored = true;
            return this.callback("dependency not found", undefined);
        }

        let data = readFileSync(dependencyPath, {encoding: "utf-8"});
        alreadyImported[dependencyPath] = true;

        this.result += data + "\n";
    }

    exitProgram(ctx: ProgramContext) {
        this.callback(undefined, this.result);
    }
}

class CompilerListener implements ExtLogicParserListener {
    constructor(public callback: (err?: string, value?: string) => void) { }
    enterReserved(ctx: ReservedContext) {
        if(_error) return;
        compilerError(ctx, "$$ reserved for compiler internals");
    }
    enterStatement(ctx: StatementContext) {
        if(_error) return;
    }

    enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
        if(_error) return;
        if(isInFunction(ctx)) {
            compilerError(ctx, "cannot declare function inside block");
        }
        let identifier = ctx.identifier().Identifier().text;
        if(functionList[identifier] != undefined) {
            compilerError(ctx.identifier(), "function already declared");
        }

        let functionBodyCtx = ctx.functionBody();
        let sourceElementsCtx = functionBodyCtx.sourceElements();

        // Don't compile function if it has an empty body
        if(sourceElementsCtx == undefined) {
            compilerWarning(functionBodyCtx, "function has empty body");
            return;
        }

        let parameterListCtx = ctx.formalParameterList();
        let parameters: IdentifierContext[] = [];

        if(parameterListCtx != undefined) {
            parameters = parameterListCtx.formalParameterArg().map((v) => {
                return v.identifier();
            });
        }
        
        let statements = sourceElementsCtx.sourceElement().map(v => v.statement());

        functionList[identifier] = new FunctionDeclaration(parameters, identifier, statements);
    }

    enterVariableStatement(ctx: VariableStatementContext) {
        if(_error) return;
        if(isInFunction(ctx)) return;
        programStatements.push(ctx.parent as StatementContext);
    }

    enterBlock(ctx: BlockContext) {
        if(_error) return;
        if(isInFunction(ctx)) return;
        programStatements.push(ctx.parent as StatementContext);
    }

    enterEndStatement(ctx: EndStatementContext) {
        if(_error) return;
        if(isInFunction(ctx)) return;
        programStatements.push(ctx.parent as StatementContext);
    }

    enterIfStatement(ctx: IfStatementContext) {
        if(_error) return;
        if(isInFunction(ctx)) return;
        programStatements.push(ctx.parent as StatementContext);
    }

    enterReturnStatement(ctx: ReturnStatementContext) {
        if(_error) return;
        if(!isInFunction(ctx)) {
            compilerError(ctx, "cannot return outside function body");
        }
    }

    enterExpressionStatement(ctx: ExpressionStatementContext) {
        if(_error) return;
        if(isInFunction(ctx)) return;
        programStatements.push(ctx.parent as StatementContext);
    }
    
    enterWhileStatement(ctx: WhileStatementContext) {
        if(_error) return;
        if(isInFunction(ctx)) return;
        programStatements.push(ctx.parent as StatementContext);
    }

    exitProgram(ctx: ProgramContext) {
        // compile and write to file
        let result: string[] = [];
        for(let i = 0; i < programStatements.length; i++) {
            let ctx = programStatements[i];
            if(ctx.parent instanceof IfStatementContext || ctx.parent instanceof WhileStatementContext) continue;
            result.push(...Compiler.compileStatement(ctx));
        }
        result.push("end");
        
        if(_error) {
            return this.callback(_error);
        }

        return this.callback(undefined, result.join("\n"));
    }
}

class Compiler {
    static currentPos = 0;
    // Statements
    static compileStatement(ctx: StatementContext, dontUpdatePosition?: boolean): string[] {
        if(ctx instanceof IfStatementContext || ctx instanceof WhileStatementContext) {
            return [];
        } else if(ctx.whileStatement() !== undefined) {
            let r = this.compileWhileStatement(ctx.whileStatement() as WhileStatementContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;  
        } else if(ctx.ifStatement() !== undefined) {
            let r = this.compileIfStatement(ctx.ifStatement() as IfStatementContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        if(ctx.importStatement() !== undefined) {
            let r = this.compileImportStatement(ctx.importStatement() as ImportStatementContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        if(ctx.whileStatement() !== undefined) {
            let r = this.compileWhileStatement(ctx.whileStatement() as WhileStatementContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        if(ctx.block() !== undefined) {
            let r = this.compileBlock(ctx.block() as BlockContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        if(ctx.endStatement() !== undefined) {
            let r = this.compileEndStatement(ctx.endStatement() as EndStatementContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        if(ctx.variableStatement() !== undefined) {
            let r = this.compileVariableStatement(ctx.variableStatement() as VariableStatementContext);
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        if(ctx.expressionStatement() !== undefined) {
            let r = this.compileExpressionStatement(ctx.expressionStatement() as ExpressionStatementContext).compiled;
            if(dontUpdatePosition !== true) this.currentPos += r.length;
            return r;
        }
        return [];
    }

    static compileImportStatement(ctx: ImportStatementContext): string[] {
        return [];
    }

    static compileBlock(ctx: BlockContext): string[] {
        let result = [];
        let statementList = ctx.statementList();
        if(statementList != undefined) {
            for(let statement of statementList.statement()) {
                result.push(...this.compileStatement(statement));
            }
        }

        return result;
    }

    static compileIfStatement(ctx: IfStatementContext): string[] {
        let result: string[] = [];
        let compiledCondition: string[] = [];

        let condition = ctx.expressionStatement().singleExpression();

        let body = ctx.statement(0);

        let alwaysTrue = false;

        let swapOrder = false;
        
        if(condition instanceof LogicalAndExpressionContext) {
            let andCondition = (condition as LogicalAndExpressionContext);
            let leftHand = andCondition.singleExpression(0);
            let rightHand = andCondition.singleExpression(1);
            
            let compiledLeftHand = this.compileSingleExpression(leftHand);
            let compiledRightHand = this.compileSingleExpression(rightHand);

            if(!compiledLeftHand.resultantVariable) compilerError(leftHand, "expression does not resolve to identifier or literal");
            if(!compiledRightHand.resultantVariable) compilerError(rightHand, "expression does not resolve to identifier or literal");

            compiledCondition.push(...compiledLeftHand.compiled);
            compiledCondition.push(...compiledRightHand.compiled);
            compiledCondition.push(`op and ifCondition ${compiledLeftHand.resultantVariable} ${compiledRightHand.resultantVariable}`);
        } else if(condition instanceof LiteralExpressionContext) {
            let literalCondition = (condition as LiteralExpressionContext);
            let booleanLiteral = literalCondition.literal().BooleanLiteral();
            if(!booleanLiteral) compilerError(literalCondition, "expression is not a boolean literal");

            if(booleanLiteral?.text.toLowerCase() == "false") {
                compiledCondition.push(`set ifCondition false`);
            } else {
                alwaysTrue = true;
            }
        } else if(condition instanceof IdentifierExpressionContext) {
            let identifierCondition = (condition as IdentifierExpressionContext);
            let res = this.compileSingleExpression(identifierCondition);

            compiledCondition.push(...res.compiled);
            compiledCondition.push(`set ifCondition ${res.resultantVariable}`);
        } else if(condition instanceof NotExpressionContext) {
            let identifierCondition = (condition as NotExpressionContext).singleExpression();
            let res = this.compileSingleExpression(identifierCondition);

            compiledCondition.push(...res.compiled);
            compiledCondition.push(`set ifCondition ${res.resultantVariable}`);
            swapOrder = true;
        } else if(condition instanceof ArgumentsExpressionContext) {
            let res = this.compileArgumentsExpression(condition);
            if(!res.resultantVariable) compilerError(condition, "function does not return a value");

            compiledCondition.push(...res.compiled);
            compiledCondition.push(`set ifCondition ${res.resultantVariable}`);
        } else if(condition instanceof RelationalExpressionContext) {
            let ctx = (condition as RelationalExpressionContext);
            let con = this.compileSingleExpression(ctx);

            compiledCondition.push(...con.compiled);
            compiledCondition.push(`set ifCondition ${con.resultantVariable}`);
        } else if(condition instanceof EqualityExpressionContext) {
            let con = this.compileSingleExpression(condition);

            compiledCondition.push(...con.compiled);
            compiledCondition.push(`set ifCondition ${con.resultantVariable}`);
        } else {
            compilerError(condition, "expression does not resolve to a conditional statement");
        }

        let insertConditionLocation = 0;

        if(compiledCondition.length > 0) {
            result.push(...compiledCondition);
            insertConditionLocation = result.length;
        }
        
        let oldCurrentPos = this.currentPos;

        result.push(...this.compileStatement(body, true));

        if(compiledCondition.length > 0) {
            result.splice(insertConditionLocation, 0, `jump ${oldCurrentPos + result.length + 1} ${swapOrder ? "equal" : "notEqual"} ifCondition true`);
        }

        if(ctx.ElseKeyword() && !alwaysTrue) {
            let elseBody = ctx.statement(1);
            this.currentPos = oldCurrentPos + result.length;
            let insertConditionLocation = result.length;
            let res = this.compileStatement(elseBody, true);
            
            result.push(...res);

            result.splice(insertConditionLocation, 0, `jump ${oldCurrentPos + result.length + 1} ${swapOrder ? "notEqual" : "equal"} ifCondition true`);
        }

        this.currentPos = oldCurrentPos + result.length;
        return result;
    }

    static compileWhileStatement(ctx: WhileStatementContext): string[] {
        let condition = ctx.expressionStatement().singleExpression();

        let result: string[] = [];
        let compiledCondition: string[] = [];

        let swapOrder = false;

        let body = ctx.statement();

        if(condition instanceof LogicalAndExpressionContext) {
            let andCondition = (condition as LogicalAndExpressionContext);
            let leftHand = andCondition.singleExpression(0);
            let rightHand = andCondition.singleExpression(1);
            
            let compiledLeftHand = this.compileSingleExpression(leftHand);
            let compiledRightHand = this.compileSingleExpression(rightHand);

            if(!compiledLeftHand.resultantVariable) compilerError(leftHand, "expression does not resolve to identifier or literal");
            if(!compiledRightHand.resultantVariable) compilerError(rightHand, "expression does not resolve to identifier or literal");

            compiledCondition.push(...compiledLeftHand.compiled);
            compiledCondition.push(...compiledRightHand.compiled);
            compiledCondition.push(`op and whileCondition ${compiledLeftHand.resultantVariable} ${compiledRightHand.resultantVariable}`);
        } else if(condition instanceof LiteralExpressionContext) {
            let literalCondition = (condition as LiteralExpressionContext);
            let booleanLiteral = literalCondition.literal().BooleanLiteral();
            if(!booleanLiteral) compilerError(literalCondition, "expression is not a boolean literal");

            if(booleanLiteral?.text.toLowerCase() == "true") {
                compiledCondition.push("set whileCondition true");
            } else {
                return [];
            }
        } else if(condition instanceof IdentifierExpressionContext) {
            let identifierCondition = (condition as IdentifierExpressionContext);
            let res = this.compileSingleExpression(identifierCondition);

            compiledCondition.push(...res.compiled);
            compiledCondition.push(`set whileCondition ${res.resultantVariable}`);
        } else if(condition instanceof NotExpressionContext) {
            let identifierCondition = (condition as NotExpressionContext).singleExpression();
            let res = this.compileSingleExpression(identifierCondition);

            compiledCondition.push(...res.compiled);
            compiledCondition.push(`set whileCondition ${res.resultantVariable}`);
            swapOrder = true;
        } else if(condition instanceof ArgumentsExpressionContext) {
            let res = this.compileArgumentsExpression(condition);
            if(!res.resultantVariable) compilerError(condition, "function does not return a value");

            compiledCondition.push(...res.compiled);
            compiledCondition.push(`set whileCondition ${res.resultantVariable}`);
        } else if(condition instanceof RelationalExpressionContext) {
            let ctx = (condition as RelationalExpressionContext);
            let con = this.compileSingleExpression(ctx);

            compiledCondition.push(...con.compiled);
            compiledCondition.push(`set whileCondition ${con.resultantVariable}`);
        } else if(condition instanceof EqualityExpressionContext) {
            let con = this.compileSingleExpression(condition);

            compiledCondition.push(...con.compiled);
            compiledCondition.push(`set whileCondition ${con.resultantVariable}`);
        } else {
            compilerError(condition, "expression does not resolve to a conditional statement");
        }

        
        let oldCurrentPos = this.currentPos;

        let cs = this.compileStatement(body, true);

        result.push(...cs);
        result.push(`jump ${oldCurrentPos} ${swapOrder ? "notEqual" : "equal"} whileCondition true`);

        compiledCondition.push(`jump ${oldCurrentPos + result.length + compiledCondition.length + 1} ${swapOrder ? "equal" : "notEqual"} whileCondition true`);

        result.unshift(...compiledCondition);

        this.currentPos = oldCurrentPos + result.length;

        return result;
    }

    static compileReturnStatement(ctx: ReturnStatementContext, declaration: FunctionDeclaration): string[] {
        let singleExpression = ctx.singleExpression();
        if(singleExpression == undefined) return [];
        if(singleExpression instanceof AssignmentExpressionContext || singleExpression instanceof AssignmentOperatorExpressionContext) compilerError(singleExpression, "cannot assign a value here");

        let result: string[] = [];

        let returnVariableName = `return${declaration.name}`;

        let compiled = this.compileSingleExpression(singleExpression);

        if(compiled.resultantVariable) compilerError(singleExpression, "expression does not resolve to an identifier or literal");

        result.push(...compiled.compiled);
        result.push(`set ${returnVariableName} ${compiled.resultantVariable}`);

        return result;
    }

    static compileEndStatement(ctx: EndStatementContext): string[] {
        return ["end"];
    }

    static compileVariableStatement(ctx: VariableStatementContext): string[] {
        let identifier = ctx.variableDeclaration().identifier();
        let singleExpression = ctx.variableDeclaration().singleExpression();
        if(singleExpression instanceof AssignmentExpressionContext || singleExpression instanceof AssignmentOperatorExpressionContext) compilerError(singleExpression, "cannot assign a value here");

        let result: string[] = [];

        let compiled = this.compileSingleExpression(singleExpression);

        if(!compiled.resultantVariable) compilerError(singleExpression, "expression does not resolve to an identifier or literal");

        result.push(...compiled.compiled);
        result.push(`set ${identifier.text} ${compiled.resultantVariable}`);

        return result;
    }

    // Expressions

    static compileExpressionStatement(ctx: ExpressionStatementContext): ExpressionResult {
        return this.compileSingleExpression(ctx.singleExpression());
    }

    static compileSingleExpression(ctx: SingleExpressionContext): ExpressionResult {
        let result: ExpressionResult | undefined;
        if(ctx instanceof LiteralExpressionContext) return {
            compiled: [`set expressionResult${expressionID + 1} ${(ctx as LiteralExpressionContext).literal().text}`],
            resultantVariable: `expressionResult${++expressionID}`
        }
        if(ctx instanceof IdentifierExpressionContext) return {
            compiled: [`set expressionResult${expressionID + 1} ${(ctx as IdentifierExpressionContext).identifier().text}`],
            resultantVariable: `expressionResult${++expressionID}`
        }
        if(ctx instanceof AssignmentExpressionContext) result = this.compileAssignmentExpression(ctx);
        if(ctx instanceof UnaryMinusExpressionContext) result = this.compileUnaryMinusExpression(ctx);
        if(ctx instanceof ParenthesizedExpressionContext) result = this.compileParenthesizedExpression(ctx);
        if(ctx instanceof MultiplicativeExpressionContext) result = this.compileMultiplicativeExpression(ctx);
        if(ctx instanceof AdditiveExpressionContext) result = this.compileAdditiveExpression(ctx);
        if(ctx instanceof PostIncrementExpressionContext) result = this.compilePostInrecementExpression(ctx);
        if(ctx instanceof PreIncrementExpressionContext) result = this.compilePreIncrementExpression(ctx);
        if(ctx instanceof PostDecrementExpressionContext) result = this.compilePostDecrementExpression(ctx);
        if(ctx instanceof PreDecrementExpressionContext) result = this.compilePreDecrementExpression(ctx);
        if(ctx instanceof ArgumentsExpressionContext) result = this.compileArgumentsExpression(ctx);
        if(ctx instanceof AssignmentOperatorExpressionContext) result = this.compileAssignmentOperationExpression(ctx);
        if(ctx instanceof RelationalExpressionContext) result = this.compileRelationalExpression(ctx);
        if(ctx instanceof LogicalAndExpressionContext) result = this.compileLogicalAndExpression(ctx);
        if(ctx instanceof EqualityExpressionContext) result = this.compileEqualityExpression(ctx);

        if(!result) return {compiled: [], resultantVariable: `expressionResult${++expressionID}`};
        let compiled = result.compiled;
        if(result.resultantVariable) compiled.push(`set expressionResult${expressionID + 1} ${result.resultantVariable}`);
        return {
            compiled: compiled,
            resultantVariable: result.resultantVariable ? `expressionResult${++expressionID}` : undefined
        };
    }

    static compilePostInrecementExpression(ctx: PostIncrementExpressionContext): ExpressionResult {
        if(ctx.parent instanceof ExpressionStatementContext) {
            if(ctx.singleExpression() instanceof IdentifierExpressionContext) {
                let identifier = (ctx.singleExpression() as IdentifierExpressionContext).identifier();
                return {
                    compiled: [
                        `op add ${identifier.text} ${identifier.text} 1`
                    ]
                }
            }
        }    
        let compiled = this.compileSingleExpression(ctx.singleExpression());
        if(!compiled.resultantVariable) compilerError(ctx.singleExpression(), "expression does not resolve to an identifier or literal");

        compiled.compiled.push(`op add ${compiled.resultantVariable} ${compiled.resultantVariable} 1`);
        compiled.compiled.push(`set postIncrement${compiled.resultantVariable} ${compiled.resultantVariable}`);
        return {
            compiled: compiled.compiled,
            resultantVariable: `postIncrement${compiled.resultantVariable}`
        }
    }

    static compilePostDecrementExpression(ctx: PostDecrementExpressionContext): ExpressionResult {
        if(ctx.parent instanceof ExpressionStatementContext) {
            if(ctx.singleExpression() instanceof IdentifierExpressionContext) {
                let identifier = (ctx.singleExpression() as IdentifierExpressionContext).identifier();
                return {
                    compiled: [
                        `op sub ${identifier.text} ${identifier.text} 1`
                    ]
                }
            }
        }  
        let compiled = this.compileSingleExpression(ctx.singleExpression());
        if(!compiled.resultantVariable) compilerError(ctx.singleExpression(), "expression does not resolve to an identifier or literal");

        compiled.compiled.push(`op sub ${compiled.resultantVariable} ${compiled.resultantVariable} 1`);
        compiled.compiled.push(`set postDecrement${compiled.resultantVariable} ${compiled.resultantVariable}`);
        return {
            compiled: compiled.compiled,
            resultantVariable: `postDecrement${compiled.resultantVariable}`
        }
    }

    static compileArgumentsExpression(ctx: ArgumentsExpressionContext): ExpressionResult {
        let result: string[] = [];
        let returns = false;
        let identifier = ctx.singleExpression();
        if(!(identifier instanceof IdentifierExpressionContext)) compilerError(identifier, "expression does not resolve to an identifer");

        if(identifier.text == "mlog") {
            let functionArguments = ctx.arguments().argument();
            if(arguments.length == 0) return {
                compiled: []
            }

            for(let argument of functionArguments) {
                let expression = argument.singleExpression();
                if(!(expression instanceof LiteralExpressionContext)) compilerError(argument.singleExpression(), "expression does not resolve to a literal");
                
                let literal = (expression as LiteralExpressionContext).literal();
                let stringLiteral = literal.StringLiteral();
                if(!stringLiteral) compilerError(literal, "expression does not resolve to a string literal");
                
                let text = stringLiteral?.text.replace(/^["']|["']$/gm, "");
                if(!text) return {compiled:[]};
                result.push(text);
            }

            return {
                compiled: result
            }
        }

        let functionDeclaration = functionList[identifier.text];
        if(!functionDeclaration) compilerError(identifier, "function not declared");

        let functionArguments = ctx.arguments().argument();
        if(functionArguments.length != functionDeclaration.parameters.length) compilerError(ctx.arguments(), "incorrect number of arguments");

        for(let i = 0; i < functionArguments.length; i++) {
            let argument = functionArguments[i];
            let parameter = functionDeclaration.parameters[i];

            let compiledArgument = this.compileSingleExpression(argument.singleExpression());
            if(!compiledArgument.resultantVariable) compilerError(argument.singleExpression(), "expression does not resolve to an identifier or literal");

            result.push(...compiledArgument.compiled);
            result.push(`set ${parameter.text} ${compiledArgument.resultantVariable}`);
        }

        for(let statement of functionDeclaration.statements) {
            let returnStatement = statement.returnStatement();
            if(returnStatement) {
                let expression = returnStatement.singleExpression();
                if(!expression) break;
                let returnResult = this.compileSingleExpression(expression);
                if(!returnResult.resultantVariable) compilerError(expression, "expression does not resolve to an identifier or literal");
                result.push(...returnResult.compiled);
                result.push(`set returnStatement${expressionID + 1} ${returnResult.resultantVariable}`);
                returns = true;
                break;
            } else result.push(...this.compileStatement(statement));
        }

        return {
            compiled: result,
            resultantVariable: returns ? `returnStatement${expressionID + 1}` : undefined
        }
    }

    static compilePreIncrementExpression(ctx: PreIncrementExpressionContext): ExpressionResult {
        if(ctx.parent instanceof ExpressionStatementContext) {
            if(ctx.singleExpression() instanceof IdentifierExpressionContext) {
                let identifier = (ctx.singleExpression() as IdentifierExpressionContext).identifier();
                return {
                    compiled: [
                        `op add ${identifier.text} ${identifier.text} 1`
                    ]
                }
            }
        } 
        let compiled = this.compileSingleExpression(ctx.singleExpression());
        if(!compiled.resultantVariable) compilerError(ctx.singleExpression(), "expression does not resolve to an identifier or literal");

        compiled.compiled.push(`set preIncrement${compiled.resultantVariable} ${compiled.resultantVariable}`);
        compiled.compiled.push(`op add ${compiled.resultantVariable} ${compiled.resultantVariable} 1`);
        return {
            compiled: compiled.compiled,
            resultantVariable: `preIncrement${compiled.resultantVariable}`
        }   
    }

    static compilePreDecrementExpression(ctx: PreDecrementExpressionContext): ExpressionResult {
        if(ctx.parent instanceof ExpressionStatementContext) {
            if(ctx.singleExpression() instanceof IdentifierExpressionContext) {
                let identifier = (ctx.singleExpression() as IdentifierExpressionContext).identifier();
                return {
                    compiled: [
                        `op sub ${identifier.text} ${identifier.text} 1`
                    ]
                }
            }
        }
        let compiled = this.compileSingleExpression(ctx.singleExpression());
        if(!compiled.resultantVariable) compilerError(ctx.singleExpression(), "expression does not resolve to an identifier or literal");

        compiled.compiled.push(`set preDecrement${compiled.resultantVariable} ${compiled.resultantVariable}`);
        compiled.compiled.push(`op sub ${compiled.resultantVariable} ${compiled.resultantVariable} 1`);
        return {
            compiled: compiled.compiled,
            resultantVariable: `preDecrement${compiled.resultantVariable}`
        } 
    }

    static compileUnaryMinusExpression(ctx: UnaryMinusExpressionContext): ExpressionResult {
        let compiled = this.compileSingleExpression(ctx.singleExpression());
        if(!compiled.resultantVariable) compilerError(ctx.singleExpression(), "expression does not resolve to an identifier or literal");

        compiled.compiled.push(`op mul ${compiled.resultantVariable} ${compiled.resultantVariable} -1`);
        return compiled;
    }

    /*static compileNotExpression(ctx: NotExpressionContext): ExpressionResult {

    }*/

    static compileMultiplicativeExpression(ctx: MultiplicativeExpressionContext): ExpressionResult {
        let leftHand = ctx.singleExpression(0);
        let rightHand = ctx.singleExpression(1);

        let c: string[] = [];

        let leftCompiled = this.compileSingleExpression(leftHand);
        let rightCompiled = this.compileSingleExpression(rightHand);

        if(!leftCompiled.resultantVariable) compilerError(leftHand, "expression does not resolve to an identifier or literal");
        if(!rightCompiled.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");

        c.push(...leftCompiled.compiled);
        c.push(...rightCompiled.compiled);
        c.push(`op mul multiplicativeExpression${expressionID + 1} ${leftCompiled.resultantVariable} ${rightCompiled.resultantVariable}`);
        return {
            compiled: c,
            resultantVariable: `multiplicativeExpression${expressionID + 1}`
        }
    }

    static compileAdditiveExpression(ctx: AdditiveExpressionContext): ExpressionResult {
        let leftHand = ctx.singleExpression(0);
        let rightHand = ctx.singleExpression(1);

        let c: string[] = [];

        let leftCompiled = this.compileSingleExpression(leftHand);
        let rightCompiled = this.compileSingleExpression(rightHand);

        if(!leftCompiled.resultantVariable) compilerError(leftHand, "expression does not resolve to an identifier or literal");
        if(!rightCompiled.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");

        c.push(...leftCompiled.compiled);
        c.push(...rightCompiled.compiled);
        c.push(`op add additiveExpression${expressionID + 1} ${leftCompiled.resultantVariable} ${rightCompiled.resultantVariable}`);
        return {
            compiled: c,
            resultantVariable: `additiveExpression${expressionID + 1}`
        }
    }

    static compileRelationalExpression(ctx: RelationalExpressionContext): ExpressionResult {
        let leftHand = ctx.singleExpression(0);
        let rightHand = ctx.singleExpression(1);

        let c: string[] = [];

        let leftCompiled = this.compileSingleExpression(leftHand);
        let rightCompiled = this.compileSingleExpression(rightHand);

        if(!leftCompiled.resultantVariable) compilerError(leftHand, "expression does not resolve to an identifier or literal");
        if(!rightCompiled.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");

        let relationalString = "";
        if(ctx.LessThan()) relationalString = "lessThan";
        if(ctx.LessThanEquals()) relationalString = "lessThanEq";
        if(ctx.GreaterThan()) relationalString = "greaterThan";
        if(ctx.GreaterThanEquals()) relationalString = "greatherThanEq";

        c.push(...leftCompiled.compiled);
        c.push(...rightCompiled.compiled);
        c.push(`op ${relationalString} relationalExpression${expressionID + 1} ${leftCompiled.resultantVariable} ${rightCompiled.resultantVariable}`);

        return {
            compiled: c,
            resultantVariable: `relationalExpression${expressionID + 1}`
        };
    }

    static compileEqualityExpression(ctx: EqualityExpressionContext): ExpressionResult {
        let leftHand = ctx.singleExpression(0);
        let rightHand = ctx.singleExpression(1);

        let c: string[] = [];

        let leftCompiled = this.compileSingleExpression(leftHand);
        let rightCompiled = this.compileSingleExpression(rightHand);

        if(!leftCompiled.resultantVariable) compilerError(leftHand, "expression does not resolve to an identifier or literal");
        if(!rightCompiled.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");

        let equivalentString = "";
        if(ctx.Equivalent()) equivalentString = "equals";
        if(ctx.NotEquals()) equivalentString = "notEquals";
        if(ctx.StrictEquals()) equivalentString = "strictEquals";

        c.push(...leftCompiled.compiled);
        c.push(...rightCompiled.compiled);
        c.push(`op ${equivalentString} equalityExpression${expressionID + 1} ${leftCompiled.resultantVariable} ${rightCompiled.resultantVariable}`);

        return {
            compiled: c,
            resultantVariable: `equalityExpression${expressionID + 1}`
        }
    }

    static compileLogicalAndExpression(ctx: LogicalAndExpressionContext): ExpressionResult {
        let leftHand = ctx.singleExpression(0);
        let rightHand = ctx.singleExpression(1);

        let c: string[] = [];

        let leftCompiled = this.compileSingleExpression(leftHand);
        let rightCompiled = this.compileSingleExpression(rightHand);

        if(!leftCompiled.resultantVariable) compilerError(leftHand, "expression does not resolve to an identifier or literal");
        if(!rightCompiled.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");

        c.push(...leftCompiled.compiled);
        c.push(...rightCompiled.compiled);
        c.push(`op and logicalAndExpression${expressionID + 1} ${leftCompiled.resultantVariable} ${rightCompiled.resultantVariable}`);

        return {
            compiled: c,
            resultantVariable: `logicalAndExpression${expressionID + 1}`
        }
    }

    /*static compileLogicalOrExpression(ctx: LogicalOrExpressionContext): ExpressionResult {

    }*/

    static compileAssignmentExpression(ctx: AssignmentExpressionContext): ExpressionResult {
        let compiled: string[] = [];
        let leftHand = ctx.identifier();
        let rightHand = ctx.singleExpression();

        let compiledRightHand = this.compileSingleExpression(rightHand);
        if(!compiledRightHand.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");
        compiled.push(...compiledRightHand.compiled);
        compiled.push(`set assignmentResult${leftHand.text} ${compiledRightHand.resultantVariable}`);
        return {
            compiled: compiled,
            resultantVariable: `assignmentResult${leftHand.text}`
        }
    }

    static compileAssignmentOperationExpression(ctx: AssignmentOperatorExpressionContext): ExpressionResult {
        let compiled: string[] = [];
        let leftHand = ctx.identifier();
        let rightHand = ctx.singleExpression();

        let compiledRightHand = this.compileSingleExpression(rightHand);
        if(!compiledRightHand.resultantVariable) compilerError(rightHand, "expression does not resolve to an identifier or literal");

        let varName = compiledRightHand.resultantVariable;

        compiled.push(...compiledRightHand.compiled);

        let operatorCtx = ctx.assignmentOperator();
        if(operatorCtx instanceof MultiplyAssignOperatorContext) {
            compiled.push(`op mul ${leftHand.text} ${leftHand.text} ${varName}`);
        } else if(operatorCtx instanceof DivideAssignOperatorContext) {
            compiled.push(`op div ${leftHand.text} ${leftHand.text} ${varName}`);
        } else if(operatorCtx instanceof ModulusAssignOperatorContext) {
            compiled.push(`op mod ${leftHand.text} ${leftHand.text} ${varName}`);
        } else if(operatorCtx instanceof PlusAssignOperatorContext) {
            compiled.push(`op add ${leftHand.text} ${leftHand.text} ${varName}`);
        } else if(operatorCtx instanceof MinusAssignOperatorContext) {
            compiled.push(`op sub ${leftHand.text} ${leftHand.text} ${varName}`);
        }

        return {
            compiled: compiled,
            resultantVariable: leftHand.text
        }
    }

    static compileIdentifierExpression(ctx: IdentifierExpressionContext): string {
        return ctx.identifier().text;
    }

    static compileLiteralExpression(ctx: LiteralExpressionContext): string {
        return ctx.literal().text;
    }

    static compileParenthesizedExpression(ctx: ParenthesizedExpressionContext): ExpressionResult {
        return this.compileSingleExpression(ctx.singleExpression());
    }
}

type ExpressionResult = {
    compiled: string[];
    resultantVariable?: string;
};

export function resolveDependencies(file: string, depsPath?: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
        if(!existsSync(file)) return reject("file not found");
        if(!depsPath) depsPath = path.dirname(path.resolve(file));
        if(!existsSync(depsPath)) return reject("dependency path not found");
        readFile(file, {encoding: "utf-8"}, async (err, data) => {
            if(err) return reject(err);
            try {
                resolve(await dependenciesFromString(data, depsPath as string, file));
            } catch(e) {
                reject(e);
            }
        });
    })
}

export function dependenciesFromString(data: string, depsPath: string, file: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if(!existsSync(depsPath)) return reject("dependency path not found");
        const base_stream = CharStreams.fromString(data);
        const lexer = new ExtLogicLexer(base_stream)
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new ExtLogicParser(tokenStream);

        const errorListener = new ErrorListener();

        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
    
        let tree = parser.program();

        const importListener: ExtLogicParserListener = new ImportListener(depsPath as string, (err, value) => {
            if(err) return reject(err);
            if(errorListener.isErrored()) {
                return reject(errorListener.getErrorMessage() + " in " + file);
            }

            resolve(value + "\n" + data)
        });

        ParseTreeWalker.DEFAULT.walk(importListener, tree);
    });
}

export function compileCode(code: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const input = CharStreams.fromString(code);
        let lexer = new ExtLogicLexer(input);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new ExtLogicParser(tokenStream);

        const errorListener = new ErrorListener();

        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        let tree = parser.program();

        const listener: ExtLogicParserListener = new CompilerListener((err, value) => {
            if(err || !value) return reject(err);
            if(errorListener.isErrored()) {
                return reject(errorListener.getErrorMessage());
            }

            resolve(value);
        });

        ParseTreeWalker.DEFAULT.walk(listener, tree);
    });
}

export async function compile(file: string, depsPath?: string) {
    try {
        const resolvedDependencies = await resolveDependencies(file, depsPath);

        return await compileCode(resolvedDependencies);
    } catch(e) {
        throw e;
    }
}

class ErrorListener<T> implements ANTLRErrorListener<T> {
    errored = false;
    errorMessage = "";
    syntaxError(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
        this.errored = true;
        this.errorMessage += `line ${line}:${charPositionInLine} ${msg}\n`;
    }

    isErrored() {
        return this.errored;
    }

    getErrorMessage() {
        return this.errorMessage;
    }
}