// Generated from grammar/ExtLogicParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PostIncrementExpressionContext } from "./ExtLogicParser";
import { PostDecrementExpressionContext } from "./ExtLogicParser";
import { ArgumentsExpressionContext } from "./ExtLogicParser";
import { PreIncrementExpressionContext } from "./ExtLogicParser";
import { PreDecrementExpressionContext } from "./ExtLogicParser";
import { UnaryMinusExpressionContext } from "./ExtLogicParser";
import { NotExpressionContext } from "./ExtLogicParser";
import { MultiplicativeExpressionContext } from "./ExtLogicParser";
import { AdditiveExpressionContext } from "./ExtLogicParser";
import { RelationalExpressionContext } from "./ExtLogicParser";
import { EqualityExpressionContext } from "./ExtLogicParser";
import { LogicalAndExpressionContext } from "./ExtLogicParser";
import { LogicalOrExpressionContext } from "./ExtLogicParser";
import { AssignmentExpressionContext } from "./ExtLogicParser";
import { AssignmentOperatorExpressionContext } from "./ExtLogicParser";
import { IdentifierExpressionContext } from "./ExtLogicParser";
import { LiteralExpressionContext } from "./ExtLogicParser";
import { ParenthesizedExpressionContext } from "./ExtLogicParser";
import { MultiplyAssignOperatorContext } from "./ExtLogicParser";
import { DivideAssignOperatorContext } from "./ExtLogicParser";
import { ModulusAssignOperatorContext } from "./ExtLogicParser";
import { PlusAssignOperatorContext } from "./ExtLogicParser";
import { MinusAssignOperatorContext } from "./ExtLogicParser";
import { ProgramContext } from "./ExtLogicParser";
import { SourceElementsContext } from "./ExtLogicParser";
import { SourceElementContext } from "./ExtLogicParser";
import { StatementContext } from "./ExtLogicParser";
import { BlockContext } from "./ExtLogicParser";
import { StatementListContext } from "./ExtLogicParser";
import { ImportStatementContext } from "./ExtLogicParser";
import { EndStatementContext } from "./ExtLogicParser";
import { VariableStatementContext } from "./ExtLogicParser";
import { VariableModifierContext } from "./ExtLogicParser";
import { VariableDeclarationContext } from "./ExtLogicParser";
import { FunctionDeclarationContext } from "./ExtLogicParser";
import { FormalParameterListContext } from "./ExtLogicParser";
import { FormalParameterArgContext } from "./ExtLogicParser";
import { FunctionBodyContext } from "./ExtLogicParser";
import { ReturnStatementContext } from "./ExtLogicParser";
import { ArgumentsContext } from "./ExtLogicParser";
import { ArgumentContext } from "./ExtLogicParser";
import { SingleExpressionContext } from "./ExtLogicParser";
import { AssignmentOperatorContext } from "./ExtLogicParser";
import { LiteralContext } from "./ExtLogicParser";
import { ReservedContext } from "./ExtLogicParser";
import { EmptyStatementContext } from "./ExtLogicParser";
import { ExpressionStatementContext } from "./ExtLogicParser";
import { IfStatementContext } from "./ExtLogicParser";
import { WhileStatementContext } from "./ExtLogicParser";
import { IdentifierContext } from "./ExtLogicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExtLogicParser`.
 */
export interface ExtLogicParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostDecrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreDecrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecrementExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplyAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplyAssignOperator?: (ctx: MultiplyAssignOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplyAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplyAssignOperator?: (ctx: MultiplyAssignOperatorContext) => void;

	/**
	 * Enter a parse tree produced by the `DivideAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterDivideAssignOperator?: (ctx: DivideAssignOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `DivideAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitDivideAssignOperator?: (ctx: DivideAssignOperatorContext) => void;

	/**
	 * Enter a parse tree produced by the `ModulusAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterModulusAssignOperator?: (ctx: ModulusAssignOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `ModulusAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitModulusAssignOperator?: (ctx: ModulusAssignOperatorContext) => void;

	/**
	 * Enter a parse tree produced by the `PlusAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterPlusAssignOperator?: (ctx: PlusAssignOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `PlusAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitPlusAssignOperator?: (ctx: PlusAssignOperatorContext) => void;

	/**
	 * Enter a parse tree produced by the `MinusAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterMinusAssignOperator?: (ctx: MinusAssignOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `MinusAssignOperator`
	 * labeled alternative in `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitMinusAssignOperator?: (ctx: MinusAssignOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	enterSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	exitSourceElements?: (ctx: SourceElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	enterSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	exitSourceElement?: (ctx: SourceElementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.endStatement`.
	 * @param ctx the parse tree
	 */
	enterEndStatement?: (ctx: EndStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.endStatement`.
	 * @param ctx the parse tree
	 */
	exitEndStatement?: (ctx: EndStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterArg?: (ctx: FormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterArg?: (ctx: FormalParameterArgContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.reserved`.
	 * @param ctx the parse tree
	 */
	enterReserved?: (ctx: ReservedContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.reserved`.
	 * @param ctx the parse tree
	 */
	exitReserved?: (ctx: ReservedContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ExtLogicParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ExtLogicParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

