// Generated from grammar/ExtLogicParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExtLogicParserListener } from "./ExtLogicParserListener";

export class ExtLogicParser extends Parser {
	public static readonly SingleLineComment = 1;
	public static readonly OpenBrace = 2;
	public static readonly CloseBrace = 3;
	public static readonly OpenParenthesis = 4;
	public static readonly CloseParenthesis = 5;
	public static readonly SemiColon = 6;
	public static readonly Comma = 7;
	public static readonly Assign = 8;
	public static readonly PlusPlus = 9;
	public static readonly MinusMinus = 10;
	public static readonly Plus = 11;
	public static readonly Minus = 12;
	public static readonly Not = 13;
	public static readonly Multiply = 14;
	public static readonly Divide = 15;
	public static readonly Modulus = 16;
	public static readonly LessThan = 17;
	public static readonly GreaterThan = 18;
	public static readonly LessThanEquals = 19;
	public static readonly GreaterThanEquals = 20;
	public static readonly Equivalent = 21;
	public static readonly StrictEquals = 22;
	public static readonly NotEquals = 23;
	public static readonly And = 24;
	public static readonly Or = 25;
	public static readonly MultiplyAssign = 26;
	public static readonly DivideAssign = 27;
	public static readonly ModulusAssign = 28;
	public static readonly PlusAssign = 29;
	public static readonly MinusAssign = 30;
	public static readonly BooleanLiteral = 31;
	public static readonly DecimalLiteral = 32;
	public static readonly FunctionKeyword = 33;
	public static readonly WhileKeyword = 34;
	public static readonly VariableKeyword = 35;
	public static readonly SetKeyword = 36;
	public static readonly IfKeyword = 37;
	public static readonly ElseKeyword = 38;
	public static readonly ReturnKeyword = 39;
	public static readonly ImportKeyword = 40;
	public static readonly EndKeyword = 41;
	public static readonly ReservedKeyword = 42;
	public static readonly Identifier = 43;
	public static readonly StringLiteral = 44;
	public static readonly WS = 45;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElements = 1;
	public static readonly RULE_sourceElement = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_block = 4;
	public static readonly RULE_statementList = 5;
	public static readonly RULE_importStatement = 6;
	public static readonly RULE_endStatement = 7;
	public static readonly RULE_variableStatement = 8;
	public static readonly RULE_variableModifier = 9;
	public static readonly RULE_variableDeclaration = 10;
	public static readonly RULE_functionDeclaration = 11;
	public static readonly RULE_formalParameterList = 12;
	public static readonly RULE_formalParameterArg = 13;
	public static readonly RULE_functionBody = 14;
	public static readonly RULE_returnStatement = 15;
	public static readonly RULE_arguments = 16;
	public static readonly RULE_argument = 17;
	public static readonly RULE_singleExpression = 18;
	public static readonly RULE_assignmentOperator = 19;
	public static readonly RULE_literal = 20;
	public static readonly RULE_reserved = 21;
	public static readonly RULE_emptyStatement = 22;
	public static readonly RULE_expressionStatement = 23;
	public static readonly RULE_ifStatement = 24;
	public static readonly RULE_whileStatement = 25;
	public static readonly RULE_identifier = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElements", "sourceElement", "statement", "block", "statementList", 
		"importStatement", "endStatement", "variableStatement", "variableModifier", 
		"variableDeclaration", "functionDeclaration", "formalParameterList", "formalParameterArg", 
		"functionBody", "returnStatement", "arguments", "argument", "singleExpression", 
		"assignmentOperator", "literal", "reserved", "emptyStatement", "expressionStatement", 
		"ifStatement", "whileStatement", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'{'", "'}'", "'('", "')'", "';'", "','", "'='", 
		"'++'", "'--'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'<'", "'>'", 
		"'<='", "'>='", "'=='", "'==='", "'!='", "'&&'", "'||'", "'*='", "'/='", 
		"'%='", "'+='", "'-='", undefined, undefined, "'function'", "'while'", 
		"'var'", "'set'", "'if'", "'else'", "'return'", "'import'", "'end'", "'$$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SingleLineComment", "OpenBrace", "CloseBrace", "OpenParenthesis", 
		"CloseParenthesis", "SemiColon", "Comma", "Assign", "PlusPlus", "MinusMinus", 
		"Plus", "Minus", "Not", "Multiply", "Divide", "Modulus", "LessThan", "GreaterThan", 
		"LessThanEquals", "GreaterThanEquals", "Equivalent", "StrictEquals", "NotEquals", 
		"And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign", 
		"MinusAssign", "BooleanLiteral", "DecimalLiteral", "FunctionKeyword", 
		"WhileKeyword", "VariableKeyword", "SetKeyword", "IfKeyword", "ElseKeyword", 
		"ReturnKeyword", "ImportKeyword", "EndKeyword", "ReservedKeyword", "Identifier", 
		"StringLiteral", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExtLogicParser._LITERAL_NAMES, ExtLogicParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExtLogicParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ExtLogicParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExtLogicParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExtLogicParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExtLogicParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExtLogicParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenBrace) | (1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.SemiColon) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.FunctionKeyword - 32)) | (1 << (ExtLogicParser.WhileKeyword - 32)) | (1 << (ExtLogicParser.VariableKeyword - 32)) | (1 << (ExtLogicParser.SetKeyword - 32)) | (1 << (ExtLogicParser.IfKeyword - 32)) | (1 << (ExtLogicParser.ReturnKeyword - 32)) | (1 << (ExtLogicParser.ImportKeyword - 32)) | (1 << (ExtLogicParser.EndKeyword - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 54;
				this.sourceElements();
				}
			}

			this.state = 57;
			this.match(ExtLogicParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ExtLogicParser.RULE_sourceElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 59;
				this.sourceElement();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenBrace) | (1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.SemiColon) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.FunctionKeyword - 32)) | (1 << (ExtLogicParser.WhileKeyword - 32)) | (1 << (ExtLogicParser.VariableKeyword - 32)) | (1 << (ExtLogicParser.SetKeyword - 32)) | (1 << (ExtLogicParser.IfKeyword - 32)) | (1 << (ExtLogicParser.ReturnKeyword - 32)) | (1 << (ExtLogicParser.ImportKeyword - 32)) | (1 << (ExtLogicParser.EndKeyword - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ExtLogicParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ExtLogicParser.RULE_statement);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExtLogicParser.OpenBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.block();
				}
				break;
			case ExtLogicParser.VariableKeyword:
			case ExtLogicParser.SetKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.variableStatement();
				}
				break;
			case ExtLogicParser.ImportKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 68;
				this.importStatement();
				}
				break;
			case ExtLogicParser.SemiColon:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 69;
				this.emptyStatement();
				}
				break;
			case ExtLogicParser.EndKeyword:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 70;
				this.endStatement();
				}
				break;
			case ExtLogicParser.OpenParenthesis:
			case ExtLogicParser.PlusPlus:
			case ExtLogicParser.MinusMinus:
			case ExtLogicParser.Minus:
			case ExtLogicParser.Not:
			case ExtLogicParser.BooleanLiteral:
			case ExtLogicParser.DecimalLiteral:
			case ExtLogicParser.Identifier:
			case ExtLogicParser.StringLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 71;
				this.expressionStatement();
				this.state = 72;
				this.match(ExtLogicParser.SemiColon);
				}
				break;
			case ExtLogicParser.IfKeyword:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 74;
				this.ifStatement();
				}
				break;
			case ExtLogicParser.ReturnKeyword:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 75;
				this.returnStatement();
				}
				break;
			case ExtLogicParser.FunctionKeyword:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 76;
				this.functionDeclaration();
				}
				break;
			case ExtLogicParser.WhileKeyword:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 77;
				this.whileStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ExtLogicParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(ExtLogicParser.OpenBrace);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenBrace) | (1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.SemiColon) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.FunctionKeyword - 32)) | (1 << (ExtLogicParser.WhileKeyword - 32)) | (1 << (ExtLogicParser.VariableKeyword - 32)) | (1 << (ExtLogicParser.SetKeyword - 32)) | (1 << (ExtLogicParser.IfKeyword - 32)) | (1 << (ExtLogicParser.ReturnKeyword - 32)) | (1 << (ExtLogicParser.ImportKeyword - 32)) | (1 << (ExtLogicParser.EndKeyword - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 81;
				this.statementList();
				}
			}

			this.state = 84;
			this.match(ExtLogicParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ExtLogicParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 86;
				this.statement();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenBrace) | (1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.SemiColon) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.FunctionKeyword - 32)) | (1 << (ExtLogicParser.WhileKeyword - 32)) | (1 << (ExtLogicParser.VariableKeyword - 32)) | (1 << (ExtLogicParser.SetKeyword - 32)) | (1 << (ExtLogicParser.IfKeyword - 32)) | (1 << (ExtLogicParser.ReturnKeyword - 32)) | (1 << (ExtLogicParser.ImportKeyword - 32)) | (1 << (ExtLogicParser.EndKeyword - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ExtLogicParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(ExtLogicParser.ImportKeyword);
			this.state = 92;
			this.match(ExtLogicParser.StringLiteral);
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 93;
				this.match(ExtLogicParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endStatement(): EndStatementContext {
		let _localctx: EndStatementContext = new EndStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ExtLogicParser.RULE_endStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(ExtLogicParser.EndKeyword);
			this.state = 97;
			this.match(ExtLogicParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ExtLogicParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.variableModifier();
			this.state = 100;
			this.variableDeclaration();
			this.state = 101;
			this.match(ExtLogicParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ExtLogicParser.RULE_variableModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			_la = this._input.LA(1);
			if (!(_la === ExtLogicParser.VariableKeyword || _la === ExtLogicParser.SetKeyword)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ExtLogicParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.identifier();
			this.state = 106;
			this.match(ExtLogicParser.Assign);
			this.state = 107;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ExtLogicParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(ExtLogicParser.FunctionKeyword);
			this.state = 110;
			this.identifier();
			this.state = 111;
			this.match(ExtLogicParser.OpenParenthesis);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ExtLogicParser.Identifier) {
				{
				this.state = 112;
				this.formalParameterList();
				}
			}

			this.state = 115;
			this.match(ExtLogicParser.CloseParenthesis);
			this.state = 116;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ExtLogicParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.formalParameterArg();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ExtLogicParser.Comma) {
				{
				{
				this.state = 119;
				this.match(ExtLogicParser.Comma);
				this.state = 120;
				this.formalParameterArg();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ExtLogicParser.RULE_formalParameterArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ExtLogicParser.RULE_functionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(ExtLogicParser.OpenBrace);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenBrace) | (1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.SemiColon) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.FunctionKeyword - 32)) | (1 << (ExtLogicParser.WhileKeyword - 32)) | (1 << (ExtLogicParser.VariableKeyword - 32)) | (1 << (ExtLogicParser.SetKeyword - 32)) | (1 << (ExtLogicParser.IfKeyword - 32)) | (1 << (ExtLogicParser.ReturnKeyword - 32)) | (1 << (ExtLogicParser.ImportKeyword - 32)) | (1 << (ExtLogicParser.EndKeyword - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 129;
				this.sourceElements();
				}
			}

			this.state = 132;
			this.match(ExtLogicParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ExtLogicParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(ExtLogicParser.ReturnKeyword);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 135;
				this.singleExpression(0);
				}
			}

			this.state = 138;
			this.match(ExtLogicParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ExtLogicParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(ExtLogicParser.OpenParenthesis);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.OpenParenthesis) | (1 << ExtLogicParser.PlusPlus) | (1 << ExtLogicParser.MinusMinus) | (1 << ExtLogicParser.Minus) | (1 << ExtLogicParser.Not) | (1 << ExtLogicParser.BooleanLiteral))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ExtLogicParser.DecimalLiteral - 32)) | (1 << (ExtLogicParser.Identifier - 32)) | (1 << (ExtLogicParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 141;
				this.argument();
				this.state = 146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 142;
						this.match(ExtLogicParser.Comma);
						this.state = 143;
						this.argument();
						}
						}
					}
					this.state = 148;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ExtLogicParser.Comma) {
					{
					this.state = 149;
					this.match(ExtLogicParser.Comma);
					}
				}

				}
			}

			this.state = 154;
			this.match(ExtLogicParser.CloseParenthesis);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ExtLogicParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, ExtLogicParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 159;
				this.match(ExtLogicParser.PlusPlus);
				this.state = 160;
				this.singleExpression(15);
				}
				break;

			case 2:
				{
				_localctx = new PreDecrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.match(ExtLogicParser.MinusMinus);
				this.state = 162;
				this.singleExpression(14);
				}
				break;

			case 3:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				this.match(ExtLogicParser.Minus);
				this.state = 164;
				this.singleExpression(13);
				}
				break;

			case 4:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				this.match(ExtLogicParser.Not);
				this.state = 166;
				this.singleExpression(12);
				}
				break;

			case 5:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 167;
				this.identifier();
				this.state = 168;
				this.match(ExtLogicParser.Assign);
				this.state = 169;
				this.singleExpression(5);
				}
				break;

			case 6:
				{
				_localctx = new AssignmentOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 171;
				this.identifier();
				this.state = 172;
				this.assignmentOperator();
				this.state = 173;
				this.singleExpression(4);
				}
				break;

			case 7:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 175;
				this.identifier();
				}
				break;

			case 8:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.literal();
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 177;
				this.match(ExtLogicParser.OpenParenthesis);
				this.state = 178;
				this.singleExpression(0);
				this.state = 179;
				this.match(ExtLogicParser.CloseParenthesis);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 209;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 207;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 184;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.Multiply) | (1 << ExtLogicParser.Divide) | (1 << ExtLogicParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 185;
						this.singleExpression(12);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 186;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 187;
						_la = this._input.LA(1);
						if (!(_la === ExtLogicParser.Plus || _la === ExtLogicParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 188;
						this.singleExpression(11);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 190;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.LessThan) | (1 << ExtLogicParser.GreaterThan) | (1 << ExtLogicParser.LessThanEquals) | (1 << ExtLogicParser.GreaterThanEquals))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 191;
						this.singleExpression(10);
						}
						break;

					case 4:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 193;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExtLogicParser.Equivalent) | (1 << ExtLogicParser.StrictEquals) | (1 << ExtLogicParser.NotEquals))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 194;
						this.singleExpression(9);
						}
						break;

					case 5:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 196;
						this.match(ExtLogicParser.And);
						this.state = 197;
						this.singleExpression(8);
						}
						break;

					case 6:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 198;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 199;
						this.match(ExtLogicParser.Or);
						this.state = 200;
						this.singleExpression(7);
						}
						break;

					case 7:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 201;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 202;
						this.match(ExtLogicParser.PlusPlus);
						}
						break;

					case 8:
						{
						_localctx = new PostDecrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 203;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 204;
						this.match(ExtLogicParser.MinusMinus);
						}
						break;

					case 9:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExtLogicParser.RULE_singleExpression);
						this.state = 205;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 206;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ExtLogicParser.RULE_assignmentOperator);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExtLogicParser.MultiplyAssign:
				_localctx = new MultiplyAssignOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.match(ExtLogicParser.MultiplyAssign);
				}
				break;
			case ExtLogicParser.DivideAssign:
				_localctx = new DivideAssignOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.match(ExtLogicParser.DivideAssign);
				}
				break;
			case ExtLogicParser.ModulusAssign:
				_localctx = new ModulusAssignOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 214;
				this.match(ExtLogicParser.ModulusAssign);
				}
				break;
			case ExtLogicParser.PlusAssign:
				_localctx = new PlusAssignOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 215;
				this.match(ExtLogicParser.PlusAssign);
				}
				break;
			case ExtLogicParser.MinusAssign:
				_localctx = new MinusAssignOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 216;
				this.match(ExtLogicParser.MinusAssign);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ExtLogicParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (ExtLogicParser.BooleanLiteral - 31)) | (1 << (ExtLogicParser.DecimalLiteral - 31)) | (1 << (ExtLogicParser.StringLiteral - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reserved(): ReservedContext {
		let _localctx: ReservedContext = new ReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ExtLogicParser.RULE_reserved);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(ExtLogicParser.ReservedKeyword);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ExtLogicParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(ExtLogicParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ExtLogicParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ExtLogicParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(ExtLogicParser.IfKeyword);
			this.state = 228;
			this.match(ExtLogicParser.OpenParenthesis);
			this.state = 229;
			this.expressionStatement();
			this.state = 230;
			this.match(ExtLogicParser.CloseParenthesis);
			this.state = 231;
			this.statement();
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 232;
				this.match(ExtLogicParser.ElseKeyword);
				this.state = 233;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ExtLogicParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(ExtLogicParser.WhileKeyword);
			this.state = 237;
			this.match(ExtLogicParser.OpenParenthesis);
			this.state = 238;
			this.expressionStatement();
			this.state = 239;
			this.match(ExtLogicParser.CloseParenthesis);
			this.state = 240;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ExtLogicParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(ExtLogicParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 18);

		case 7:
			return this.precpred(this._ctx, 17);

		case 8:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xF7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x05\x02:\n\x02\x03\x02\x03\x02\x03\x03\x06\x03?\n\x03\r\x03\x0E\x03" +
		"@\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05Q\n\x05\x03\x06\x03" +
		"\x06\x05\x06U\n\x06\x03\x06\x03\x06\x03\x07\x06\x07Z\n\x07\r\x07\x0E\x07" +
		"[\x03\b\x03\b\x03\b\x05\ba\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\rt" +
		"\n\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E|\n\x0E\f\x0E\x0E" +
		"\x0E\x7F\v\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\x85\n\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x05\x11\x8B\n\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x07\x12\x93\n\x12\f\x12\x0E\x12\x96\v\x12\x03\x12" +
		"\x05\x12\x99\n\x12\x05\x12\x9B\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xB8\n\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\xD2\n\x14\f\x14\x0E\x14\xD5\v" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xDC\n\x15\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xED\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x03" +
		"&\x1D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x02\x02\b\x03\x02%&\x03\x02\x10\x12" +
		"\x03\x02\r\x0E\x03\x02\x13\x16\x03\x02\x17\x19\x04\x02!\"..\x02\u0106" +
		"\x029\x03\x02\x02\x02\x04>\x03\x02\x02\x02\x06B\x03\x02\x02\x02\bP\x03" +
		"\x02\x02\x02\nR\x03\x02\x02\x02\fY\x03\x02\x02\x02\x0E]\x03\x02\x02\x02" +
		"\x10b\x03\x02\x02\x02\x12e\x03\x02\x02\x02\x14i\x03\x02\x02\x02\x16k\x03" +
		"\x02\x02\x02\x18o\x03\x02\x02\x02\x1Ax\x03\x02\x02\x02\x1C\x80\x03\x02" +
		"\x02\x02\x1E\x82\x03\x02\x02\x02 \x88\x03\x02\x02\x02\"\x8E\x03\x02\x02" +
		"\x02$\x9E\x03\x02\x02\x02&\xB7\x03\x02\x02\x02(\xDB\x03\x02\x02\x02*\xDD" +
		"\x03\x02\x02\x02,\xDF\x03\x02\x02\x02.\xE1\x03\x02\x02\x020\xE3\x03\x02" +
		"\x02\x022\xE5\x03\x02\x02\x024\xEE\x03\x02\x02\x026\xF4\x03\x02\x02\x02" +
		"8:\x05\x04\x03\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02" +
		";<\x07\x02\x02\x03<\x03\x03\x02\x02\x02=?\x05\x06\x04\x02>=\x03\x02\x02" +
		"\x02?@\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\x05\x03\x02" +
		"\x02\x02BC\x05\b\x05\x02C\x07\x03\x02\x02\x02DQ\x05\n\x06\x02EQ\x05\x12" +
		"\n\x02FQ\x05\x0E\b\x02GQ\x05.\x18\x02HQ\x05\x10\t\x02IJ\x050\x19\x02J" +
		"K\x07\b\x02\x02KQ\x03\x02\x02\x02LQ\x052\x1A\x02MQ\x05 \x11\x02NQ\x05" +
		"\x18\r\x02OQ\x054\x1B\x02PD\x03\x02\x02\x02PE\x03\x02\x02\x02PF\x03\x02" +
		"\x02\x02PG\x03\x02\x02\x02PH\x03\x02\x02\x02PI\x03\x02\x02\x02PL\x03\x02" +
		"\x02\x02PM\x03\x02\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02Q\t\x03" +
		"\x02\x02\x02RT\x07\x04\x02\x02SU\x05\f\x07\x02TS\x03\x02\x02\x02TU\x03" +
		"\x02\x02\x02UV\x03\x02\x02\x02VW\x07\x05\x02\x02W\v\x03\x02\x02\x02XZ" +
		"\x05\b\x05\x02YX\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02\x02[" +
		"\\\x03\x02\x02\x02\\\r\x03\x02\x02\x02]^\x07*\x02\x02^`\x07.\x02\x02_" +
		"a\x07\b\x02\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02a\x0F\x03\x02\x02\x02" +
		"bc\x07+\x02\x02cd\x07\b\x02\x02d\x11\x03\x02\x02\x02ef\x05\x14\v\x02f" +
		"g\x05\x16\f\x02gh\x07\b\x02\x02h\x13\x03\x02\x02\x02ij\t\x02\x02\x02j" +
		"\x15\x03\x02\x02\x02kl\x056\x1C\x02lm\x07\n\x02\x02mn\x05&\x14\x02n\x17" +
		"\x03\x02\x02\x02op\x07#\x02\x02pq\x056\x1C\x02qs\x07\x06\x02\x02rt\x05" +
		"\x1A\x0E\x02sr\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x07" +
		"\x07\x02\x02vw\x05\x1E\x10\x02w\x19\x03\x02\x02\x02x}\x05\x1C\x0F\x02" +
		"yz\x07\t\x02\x02z|\x05\x1C\x0F\x02{y\x03\x02\x02\x02|\x7F\x03\x02\x02" +
		"\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x1B\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x80\x81\x056\x1C\x02\x81\x1D\x03\x02\x02\x02\x82\x84\x07" +
		"\x04\x02\x02\x83\x85\x05\x04\x03\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03" +
		"\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x07\x05\x02\x02\x87\x1F\x03" +
		"\x02\x02\x02\x88\x8A\x07)\x02\x02\x89\x8B\x05&\x14\x02\x8A\x89\x03\x02" +
		"\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x07\b" +
		"\x02\x02\x8D!\x03\x02\x02\x02\x8E\x9A\x07\x06\x02\x02\x8F\x94\x05$\x13" +
		"\x02\x90\x91\x07\t\x02\x02\x91\x93\x05$\x13\x02\x92\x90\x03\x02\x02\x02" +
		"\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02" +
		"\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x99\x07\t\x02\x02" +
		"\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02" +
		"\x9A\x8F\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
		"\x9C\x9D\x07\x07\x02\x02\x9D#\x03\x02\x02\x02\x9E\x9F\x05&\x14\x02\x9F" +
		"%\x03\x02\x02\x02\xA0\xA1\b\x14\x01\x02\xA1\xA2\x07\v\x02\x02\xA2\xB8" +
		"\x05&\x14\x11\xA3\xA4\x07\f\x02\x02\xA4\xB8\x05&\x14\x10\xA5\xA6\x07\x0E" +
		"\x02\x02\xA6\xB8\x05&\x14\x0F\xA7\xA8\x07\x0F\x02\x02\xA8\xB8\x05&\x14" +
		"\x0E\xA9\xAA\x056\x1C\x02\xAA\xAB\x07\n\x02\x02\xAB\xAC\x05&\x14\x07\xAC" +
		"\xB8\x03\x02\x02\x02\xAD\xAE\x056\x1C\x02\xAE\xAF\x05(\x15\x02\xAF\xB0" +
		"\x05&\x14\x06\xB0\xB8\x03\x02\x02\x02\xB1\xB8\x056\x1C\x02\xB2\xB8\x05" +
		"*\x16\x02\xB3\xB4\x07\x06\x02\x02\xB4\xB5\x05&\x14\x02\xB5\xB6\x07\x07" +
		"\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xA0\x03\x02\x02\x02\xB7\xA3\x03\x02" +
		"\x02\x02\xB7\xA5\x03\x02\x02\x02\xB7\xA7\x03\x02\x02\x02\xB7\xA9\x03\x02" +
		"\x02\x02\xB7\xAD\x03\x02\x02\x02\xB7\xB1\x03\x02\x02\x02\xB7\xB2\x03\x02" +
		"\x02\x02\xB7\xB3\x03\x02\x02\x02\xB8\xD3\x03\x02\x02\x02\xB9\xBA\f\r\x02" +
		"\x02\xBA\xBB\t\x03\x02\x02\xBB\xD2\x05&\x14\x0E\xBC\xBD\f\f\x02\x02\xBD" +
		"\xBE\t\x04\x02\x02\xBE\xD2\x05&\x14\r\xBF\xC0\f\v\x02\x02\xC0\xC1\t\x05" +
		"\x02\x02\xC1\xD2\x05&\x14\f\xC2\xC3\f\n\x02\x02\xC3\xC4\t\x06\x02\x02" +
		"\xC4\xD2\x05&\x14\v\xC5\xC6\f\t\x02\x02\xC6\xC7\x07\x1A\x02\x02\xC7\xD2" +
		"\x05&\x14\n\xC8\xC9\f\b\x02\x02\xC9\xCA\x07\x1B\x02\x02\xCA\xD2\x05&\x14" +
		"\t\xCB\xCC\f\x14\x02\x02\xCC\xD2\x07\v\x02\x02\xCD\xCE\f\x13\x02\x02\xCE" +
		"\xD2\x07\f\x02\x02\xCF\xD0\f\x12\x02\x02\xD0\xD2\x05\"\x12\x02\xD1\xB9" +
		"\x03\x02\x02\x02\xD1\xBC\x03\x02\x02\x02\xD1\xBF\x03\x02\x02\x02\xD1\xC2" +
		"\x03\x02\x02\x02\xD1\xC5\x03\x02\x02\x02\xD1\xC8\x03\x02\x02\x02\xD1\xCB" +
		"\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\'" +
		"\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xDC\x07\x1C\x02\x02\xD7\xDC" +
		"\x07\x1D\x02\x02\xD8\xDC\x07\x1E\x02\x02\xD9\xDC\x07\x1F\x02\x02\xDA\xDC" +
		"\x07 \x02\x02\xDB\xD6\x03\x02\x02\x02\xDB\xD7\x03\x02\x02\x02\xDB\xD8" +
		"\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC)" +
		"\x03\x02\x02\x02\xDD\xDE\t\x07\x02\x02\xDE+\x03\x02\x02\x02\xDF\xE0\x07" +
		",\x02\x02\xE0-\x03\x02\x02\x02\xE1\xE2\x07\b\x02\x02\xE2/\x03\x02\x02" +
		"\x02\xE3\xE4\x05&\x14\x02\xE41\x03\x02\x02\x02\xE5\xE6\x07\'\x02\x02\xE6" +
		"\xE7\x07\x06\x02\x02\xE7\xE8\x050\x19\x02\xE8\xE9\x07\x07\x02\x02\xE9" +
		"\xEC\x05\b\x05\x02\xEA\xEB\x07(\x02\x02\xEB\xED\x05\b\x05\x02\xEC\xEA" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED3\x03\x02\x02\x02\xEE\xEF" +
		"\x07$\x02\x02\xEF\xF0\x07\x06\x02\x02\xF0\xF1\x050\x19\x02\xF1\xF2\x07" +
		"\x07\x02\x02\xF2\xF3\x05\b\x05\x02\xF35\x03\x02\x02\x02\xF4\xF5\x07-\x02" +
		"\x02\xF57\x03\x02\x02\x02\x149@PT[`s}\x84\x8A\x94\x98\x9A\xB7\xD1\xD3" +
		"\xDB\xEC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExtLogicParser.__ATN) {
			ExtLogicParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExtLogicParser._serializedATN));
		}

		return ExtLogicParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ExtLogicParser.EOF, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_program; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public endStatement(): EndStatementContext | undefined {
		return this.tryGetRuleContext(0, EndStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.SemiColon, 0); }
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_statement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ExtLogicParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ExtLogicParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_block; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_statementList; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public ImportKeyword(): TerminalNode { return this.getToken(ExtLogicParser.ImportKeyword, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(ExtLogicParser.StringLiteral, 0); }
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
}


export class EndStatementContext extends ParserRuleContext {
	public EndKeyword(): TerminalNode { return this.getToken(ExtLogicParser.EndKeyword, 0); }
	public SemiColon(): TerminalNode { return this.getToken(ExtLogicParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_endStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterEndStatement) {
			listener.enterEndStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitEndStatement) {
			listener.exitEndStatement(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public variableModifier(): VariableModifierContext {
		return this.getRuleContext(0, VariableModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(ExtLogicParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public SetKeyword(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.SetKeyword, 0); }
	public VariableKeyword(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.VariableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Assign(): TerminalNode { return this.getToken(ExtLogicParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FunctionKeyword(): TerminalNode { return this.getToken(ExtLogicParser.FunctionKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OpenParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.OpenParenthesis, 0); }
	public CloseParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.CloseParenthesis, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ExtLogicParser.Comma);
		} else {
			return this.getToken(ExtLogicParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ExtLogicParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ExtLogicParser.CloseBrace, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public ReturnKeyword(): TerminalNode { return this.getToken(ExtLogicParser.ReturnKeyword, 0); }
	public SemiColon(): TerminalNode { return this.getToken(ExtLogicParser.SemiColon, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.OpenParenthesis, 0); }
	public CloseParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.CloseParenthesis, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ExtLogicParser.Comma);
		} else {
			return this.getToken(ExtLogicParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_argument; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(ExtLogicParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
}
export class PostDecrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(ExtLogicParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterPostDecrementExpression) {
			listener.enterPostDecrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitPostDecrementExpression) {
			listener.exitPostDecrementExpression(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(ExtLogicParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
}
export class PreDecrementExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(ExtLogicParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterPreDecrementExpression) {
			listener.enterPreDecrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitPreDecrementExpression) {
			listener.exitPreDecrementExpression(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(ExtLogicParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(ExtLogicParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.LessThan, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.GreaterThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equivalent(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.Equivalent, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.NotEquals, 0); }
	public StrictEquals(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.StrictEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(ExtLogicParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(ExtLogicParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Assign(): TerminalNode { return this.getToken(ExtLogicParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.OpenParenthesis, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.CloseParenthesis, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_assignmentOperator; }
	public copyFrom(ctx: AssignmentOperatorContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplyAssignOperatorContext extends AssignmentOperatorContext {
	public MultiplyAssign(): TerminalNode { return this.getToken(ExtLogicParser.MultiplyAssign, 0); }
	constructor(ctx: AssignmentOperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterMultiplyAssignOperator) {
			listener.enterMultiplyAssignOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitMultiplyAssignOperator) {
			listener.exitMultiplyAssignOperator(this);
		}
	}
}
export class DivideAssignOperatorContext extends AssignmentOperatorContext {
	public DivideAssign(): TerminalNode { return this.getToken(ExtLogicParser.DivideAssign, 0); }
	constructor(ctx: AssignmentOperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterDivideAssignOperator) {
			listener.enterDivideAssignOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitDivideAssignOperator) {
			listener.exitDivideAssignOperator(this);
		}
	}
}
export class ModulusAssignOperatorContext extends AssignmentOperatorContext {
	public ModulusAssign(): TerminalNode { return this.getToken(ExtLogicParser.ModulusAssign, 0); }
	constructor(ctx: AssignmentOperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterModulusAssignOperator) {
			listener.enterModulusAssignOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitModulusAssignOperator) {
			listener.exitModulusAssignOperator(this);
		}
	}
}
export class PlusAssignOperatorContext extends AssignmentOperatorContext {
	public PlusAssign(): TerminalNode { return this.getToken(ExtLogicParser.PlusAssign, 0); }
	constructor(ctx: AssignmentOperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterPlusAssignOperator) {
			listener.enterPlusAssignOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitPlusAssignOperator) {
			listener.exitPlusAssignOperator(this);
		}
	}
}
export class MinusAssignOperatorContext extends AssignmentOperatorContext {
	public MinusAssign(): TerminalNode { return this.getToken(ExtLogicParser.MinusAssign, 0); }
	constructor(ctx: AssignmentOperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterMinusAssignOperator) {
			listener.enterMinusAssignOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitMinusAssignOperator) {
			listener.exitMinusAssignOperator(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.StringLiteral, 0); }
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.DecimalLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_literal; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class ReservedContext extends ParserRuleContext {
	public ReservedKeyword(): TerminalNode { return this.getToken(ExtLogicParser.ReservedKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_reserved; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterReserved) {
			listener.enterReserved(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitReserved) {
			listener.exitReserved(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(ExtLogicParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IfKeyword(): TerminalNode { return this.getToken(ExtLogicParser.IfKeyword, 0); }
	public OpenParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.OpenParenthesis, 0); }
	public expressionStatement(): ExpressionStatementContext {
		return this.getRuleContext(0, ExpressionStatementContext);
	}
	public CloseParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.CloseParenthesis, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ElseKeyword(): TerminalNode | undefined { return this.tryGetToken(ExtLogicParser.ElseKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WhileKeyword(): TerminalNode { return this.getToken(ExtLogicParser.WhileKeyword, 0); }
	public OpenParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.OpenParenthesis, 0); }
	public expressionStatement(): ExpressionStatementContext {
		return this.getRuleContext(0, ExpressionStatementContext);
	}
	public CloseParenthesis(): TerminalNode { return this.getToken(ExtLogicParser.CloseParenthesis, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ExtLogicParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExtLogicParser.RULE_identifier; }
	// @Override
	public enterRule(listener: ExtLogicParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ExtLogicParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


