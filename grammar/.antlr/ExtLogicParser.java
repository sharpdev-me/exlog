// Generated from c:\Users\digid\Documents\Memes\ExtLogic\grammar\ExtLogicParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ExtLogicParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SingleLineComment=1, OpenBrace=2, CloseBrace=3, OpenParenthesis=4, CloseParenthesis=5, 
		SemiColon=6, Comma=7, Assign=8, PlusPlus=9, MinusMinus=10, Plus=11, Minus=12, 
		Not=13, Multiply=14, Divide=15, Modulus=16, LessThan=17, GreaterThan=18, 
		LessThanEquals=19, GreaterThanEquals=20, Equivalent=21, StrictEquals=22, 
		NotEquals=23, And=24, Or=25, MultiplyAssign=26, DivideAssign=27, ModulusAssign=28, 
		PlusAssign=29, MinusAssign=30, BooleanLiteral=31, DecimalLiteral=32, FunctionKeyword=33, 
		WhileKeyword=34, VariableKeyword=35, SetKeyword=36, IfKeyword=37, ElseKeyword=38, 
		ReturnKeyword=39, ImportKeyword=40, EndKeyword=41, ReservedKeyword=42, 
		Identifier=43, StringLiteral=44, WS=45;
	public static final int
		RULE_program = 0, RULE_sourceElements = 1, RULE_sourceElement = 2, RULE_statement = 3, 
		RULE_block = 4, RULE_statementList = 5, RULE_importStatement = 6, RULE_endStatement = 7, 
		RULE_variableStatement = 8, RULE_variableModifier = 9, RULE_variableDeclaration = 10, 
		RULE_functionDeclaration = 11, RULE_formalParameterList = 12, RULE_formalParameterArg = 13, 
		RULE_functionBody = 14, RULE_returnStatement = 15, RULE_arguments = 16, 
		RULE_argument = 17, RULE_singleExpression = 18, RULE_assignmentOperator = 19, 
		RULE_literal = 20, RULE_reserved = 21, RULE_emptyStatement = 22, RULE_expressionStatement = 23, 
		RULE_ifStatement = 24, RULE_whileStatement = 25, RULE_identifier = 26;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "sourceElements", "sourceElement", "statement", "block", "statementList", 
			"importStatement", "endStatement", "variableStatement", "variableModifier", 
			"variableDeclaration", "functionDeclaration", "formalParameterList", 
			"formalParameterArg", "functionBody", "returnStatement", "arguments", 
			"argument", "singleExpression", "assignmentOperator", "literal", "reserved", 
			"emptyStatement", "expressionStatement", "ifStatement", "whileStatement", 
			"identifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'{'", "'}'", "'('", "')'", "';'", "','", "'='", "'++'", 
			"'--'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", 
			"'>='", "'=='", "'==='", "'!='", "'&&'", "'||'", "'*='", "'/='", "'%='", 
			"'+='", "'-='", null, null, "'function'", "'while'", "'var'", "'set'", 
			"'if'", "'else'", "'return'", "'import'", "'end'", "'$$'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SingleLineComment", "OpenBrace", "CloseBrace", "OpenParenthesis", 
			"CloseParenthesis", "SemiColon", "Comma", "Assign", "PlusPlus", "MinusMinus", 
			"Plus", "Minus", "Not", "Multiply", "Divide", "Modulus", "LessThan", 
			"GreaterThan", "LessThanEquals", "GreaterThanEquals", "Equivalent", "StrictEquals", 
			"NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
			"PlusAssign", "MinusAssign", "BooleanLiteral", "DecimalLiteral", "FunctionKeyword", 
			"WhileKeyword", "VariableKeyword", "SetKeyword", "IfKeyword", "ElseKeyword", 
			"ReturnKeyword", "ImportKeyword", "EndKeyword", "ReservedKeyword", "Identifier", 
			"StringLiteral", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ExtLogicParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ExtLogicParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ExtLogicParser.EOF, 0); }
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBrace) | (1L << OpenParenthesis) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << FunctionKeyword) | (1L << WhileKeyword) | (1L << VariableKeyword) | (1L << SetKeyword) | (1L << IfKeyword) | (1L << ReturnKeyword) | (1L << ImportKeyword) | (1L << EndKeyword) | (1L << Identifier) | (1L << StringLiteral))) != 0)) {
				{
				setState(54);
				sourceElements();
				}
			}

			setState(57);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SourceElementsContext extends ParserRuleContext {
		public List<SourceElementContext> sourceElement() {
			return getRuleContexts(SourceElementContext.class);
		}
		public SourceElementContext sourceElement(int i) {
			return getRuleContext(SourceElementContext.class,i);
		}
		public SourceElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElements; }
	}

	public final SourceElementsContext sourceElements() throws RecognitionException {
		SourceElementsContext _localctx = new SourceElementsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sourceElements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(59);
				sourceElement();
				}
				}
				setState(62); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBrace) | (1L << OpenParenthesis) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << FunctionKeyword) | (1L << WhileKeyword) | (1L << VariableKeyword) | (1L << SetKeyword) | (1L << IfKeyword) | (1L << ReturnKeyword) | (1L << ImportKeyword) | (1L << EndKeyword) | (1L << Identifier) | (1L << StringLiteral))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SourceElementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SourceElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElement; }
	}

	public final SourceElementContext sourceElement() throws RecognitionException {
		SourceElementContext _localctx = new SourceElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sourceElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public ImportStatementContext importStatement() {
			return getRuleContext(ImportStatementContext.class,0);
		}
		public EmptyStatementContext emptyStatement() {
			return getRuleContext(EmptyStatementContext.class,0);
		}
		public EndStatementContext endStatement() {
			return getRuleContext(EndStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(ExtLogicParser.SemiColon, 0); }
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_statement);
		try {
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBrace:
				enterOuterAlt(_localctx, 1);
				{
				setState(66);
				block();
				}
				break;
			case VariableKeyword:
			case SetKeyword:
				enterOuterAlt(_localctx, 2);
				{
				setState(67);
				variableStatement();
				}
				break;
			case ImportKeyword:
				enterOuterAlt(_localctx, 3);
				{
				setState(68);
				importStatement();
				}
				break;
			case SemiColon:
				enterOuterAlt(_localctx, 4);
				{
				setState(69);
				emptyStatement();
				}
				break;
			case EndKeyword:
				enterOuterAlt(_localctx, 5);
				{
				setState(70);
				endStatement();
				}
				break;
			case OpenParenthesis:
			case PlusPlus:
			case MinusMinus:
			case Minus:
			case Not:
			case BooleanLiteral:
			case DecimalLiteral:
			case Identifier:
			case StringLiteral:
				enterOuterAlt(_localctx, 6);
				{
				setState(71);
				expressionStatement();
				setState(72);
				match(SemiColon);
				}
				break;
			case IfKeyword:
				enterOuterAlt(_localctx, 7);
				{
				setState(74);
				ifStatement();
				}
				break;
			case ReturnKeyword:
				enterOuterAlt(_localctx, 8);
				{
				setState(75);
				returnStatement();
				}
				break;
			case FunctionKeyword:
				enterOuterAlt(_localctx, 9);
				{
				setState(76);
				functionDeclaration();
				}
				break;
			case WhileKeyword:
				enterOuterAlt(_localctx, 10);
				{
				setState(77);
				whileStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(ExtLogicParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(ExtLogicParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(OpenBrace);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBrace) | (1L << OpenParenthesis) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << FunctionKeyword) | (1L << WhileKeyword) | (1L << VariableKeyword) | (1L << SetKeyword) | (1L << IfKeyword) | (1L << ReturnKeyword) | (1L << ImportKeyword) | (1L << EndKeyword) | (1L << Identifier) | (1L << StringLiteral))) != 0)) {
				{
				setState(81);
				statementList();
				}
			}

			setState(84);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_statementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(86);
				statement();
				}
				}
				setState(89); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBrace) | (1L << OpenParenthesis) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << FunctionKeyword) | (1L << WhileKeyword) | (1L << VariableKeyword) | (1L << SetKeyword) | (1L << IfKeyword) | (1L << ReturnKeyword) | (1L << ImportKeyword) | (1L << EndKeyword) | (1L << Identifier) | (1L << StringLiteral))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStatementContext extends ParserRuleContext {
		public TerminalNode ImportKeyword() { return getToken(ExtLogicParser.ImportKeyword, 0); }
		public TerminalNode StringLiteral() { return getToken(ExtLogicParser.StringLiteral, 0); }
		public TerminalNode SemiColon() { return getToken(ExtLogicParser.SemiColon, 0); }
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_importStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(ImportKeyword);
			setState(92);
			match(StringLiteral);
			setState(94);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(93);
				match(SemiColon);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndStatementContext extends ParserRuleContext {
		public TerminalNode EndKeyword() { return getToken(ExtLogicParser.EndKeyword, 0); }
		public TerminalNode SemiColon() { return getToken(ExtLogicParser.SemiColon, 0); }
		public EndStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endStatement; }
	}

	public final EndStatementContext endStatement() throws RecognitionException {
		EndStatementContext _localctx = new EndStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_endStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(EndKeyword);
			setState(97);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableStatementContext extends ParserRuleContext {
		public VariableModifierContext variableModifier() {
			return getRuleContext(VariableModifierContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(ExtLogicParser.SemiColon, 0); }
		public VariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableStatement; }
	}

	public final VariableStatementContext variableStatement() throws RecognitionException {
		VariableStatementContext _localctx = new VariableStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			variableModifier();
			setState(100);
			variableDeclaration();
			setState(101);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableModifierContext extends ParserRuleContext {
		public TerminalNode SetKeyword() { return getToken(ExtLogicParser.SetKeyword, 0); }
		public TerminalNode VariableKeyword() { return getToken(ExtLogicParser.VariableKeyword, 0); }
		public VariableModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableModifier; }
	}

	public final VariableModifierContext variableModifier() throws RecognitionException {
		VariableModifierContext _localctx = new VariableModifierContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variableModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			_la = _input.LA(1);
			if ( !(_la==VariableKeyword || _la==SetKeyword) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Assign() { return getToken(ExtLogicParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			identifier();
			setState(106);
			match(Assign);
			setState(107);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FunctionKeyword() { return getToken(ExtLogicParser.FunctionKeyword, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OpenParenthesis() { return getToken(ExtLogicParser.OpenParenthesis, 0); }
		public TerminalNode CloseParenthesis() { return getToken(ExtLogicParser.CloseParenthesis, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(FunctionKeyword);
			setState(110);
			identifier();
			setState(111);
			match(OpenParenthesis);
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(112);
				formalParameterList();
				}
			}

			setState(115);
			match(CloseParenthesis);
			setState(116);
			functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterArgContext> formalParameterArg() {
			return getRuleContexts(FormalParameterArgContext.class);
		}
		public FormalParameterArgContext formalParameterArg(int i) {
			return getRuleContext(FormalParameterArgContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(ExtLogicParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(ExtLogicParser.Comma, i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			formalParameterArg();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(119);
				match(Comma);
				setState(120);
				formalParameterArg();
				}
				}
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterArgContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public FormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterArg; }
	}

	public final FormalParameterArgContext formalParameterArg() throws RecognitionException {
		FormalParameterArgContext _localctx = new FormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_formalParameterArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(ExtLogicParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(ExtLogicParser.CloseBrace, 0); }
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_functionBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(OpenBrace);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBrace) | (1L << OpenParenthesis) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << FunctionKeyword) | (1L << WhileKeyword) | (1L << VariableKeyword) | (1L << SetKeyword) | (1L << IfKeyword) | (1L << ReturnKeyword) | (1L << ImportKeyword) | (1L << EndKeyword) | (1L << Identifier) | (1L << StringLiteral))) != 0)) {
				{
				setState(129);
				sourceElements();
				}
			}

			setState(132);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode ReturnKeyword() { return getToken(ExtLogicParser.ReturnKeyword, 0); }
		public TerminalNode SemiColon() { return getToken(ExtLogicParser.SemiColon, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(ReturnKeyword);
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParenthesis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << Identifier) | (1L << StringLiteral))) != 0)) {
				{
				setState(135);
				singleExpression(0);
				}
			}

			setState(138);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParenthesis() { return getToken(ExtLogicParser.OpenParenthesis, 0); }
		public TerminalNode CloseParenthesis() { return getToken(ExtLogicParser.CloseParenthesis, 0); }
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(ExtLogicParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(ExtLogicParser.Comma, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_arguments);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(OpenParenthesis);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParenthesis) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << Not) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << Identifier) | (1L << StringLiteral))) != 0)) {
				{
				setState(141);
				argument();
				setState(146);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(142);
						match(Comma);
						setState(143);
						argument();
						}
						} 
					}
					setState(148);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
				}
				setState(150);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(149);
					match(Comma);
					}
				}

				}
			}

			setState(154);
			match(CloseParenthesis);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ParenthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode OpenParenthesis() { return getToken(ExtLogicParser.OpenParenthesis, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode CloseParenthesis() { return getToken(ExtLogicParser.CloseParenthesis, 0); }
		public ParenthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(ExtLogicParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(ExtLogicParser.Minus, 0); }
		public AdditiveExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(ExtLogicParser.LessThan, 0); }
		public TerminalNode GreaterThan() { return getToken(ExtLogicParser.GreaterThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(ExtLogicParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(ExtLogicParser.GreaterThanEquals, 0); }
		public RelationalExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostIncrementExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(ExtLogicParser.PlusPlus, 0); }
		public PostIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode And() { return getToken(ExtLogicParser.And, 0); }
		public LogicalAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreDecrementExpressionContext extends SingleExpressionContext {
		public TerminalNode MinusMinus() { return getToken(ExtLogicParser.MinusMinus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreDecrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreIncrementExpressionContext extends SingleExpressionContext {
		public TerminalNode PlusPlus() { return getToken(ExtLogicParser.PlusPlus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Or() { return getToken(ExtLogicParser.Or, 0); }
		public LogicalOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotExpressionContext extends SingleExpressionContext {
		public TerminalNode Not() { return getToken(ExtLogicParser.Not, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public NotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArgumentsExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ArgumentsExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryMinusExpressionContext extends SingleExpressionContext {
		public TerminalNode Minus() { return getToken(ExtLogicParser.Minus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryMinusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Assign() { return getToken(ExtLogicParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public AssignmentExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentOperatorExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public AssignmentOperatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostDecrementExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode MinusMinus() { return getToken(ExtLogicParser.MinusMinus, 0); }
		public PostDecrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Equivalent() { return getToken(ExtLogicParser.Equivalent, 0); }
		public TerminalNode NotEquals() { return getToken(ExtLogicParser.NotEquals, 0); }
		public TerminalNode StrictEquals() { return getToken(ExtLogicParser.StrictEquals, 0); }
		public EqualityExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(ExtLogicParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(ExtLogicParser.Divide, 0); }
		public TerminalNode Modulus() { return getToken(ExtLogicParser.Modulus, 0); }
		public MultiplicativeExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 36;
		enterRecursionRule(_localctx, 36, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(159);
				match(PlusPlus);
				setState(160);
				singleExpression(15);
				}
				break;
			case 2:
				{
				_localctx = new PreDecrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(161);
				match(MinusMinus);
				setState(162);
				singleExpression(14);
				}
				break;
			case 3:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(163);
				match(Minus);
				setState(164);
				singleExpression(13);
				}
				break;
			case 4:
				{
				_localctx = new NotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(165);
				match(Not);
				setState(166);
				singleExpression(12);
				}
				break;
			case 5:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(167);
				identifier();
				setState(168);
				match(Assign);
				setState(169);
				singleExpression(5);
				}
				break;
			case 6:
				{
				_localctx = new AssignmentOperatorExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(171);
				identifier();
				setState(172);
				assignmentOperator();
				setState(173);
				singleExpression(4);
				}
				break;
			case 7:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(175);
				identifier();
				}
				break;
			case 8:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(176);
				literal();
				}
				break;
			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(177);
				match(OpenParenthesis);
				setState(178);
				singleExpression(0);
				setState(179);
				match(CloseParenthesis);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(209);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(207);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(183);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(184);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << Modulus))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(185);
						singleExpression(12);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(186);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(187);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(188);
						singleExpression(11);
						}
						break;
					case 3:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(189);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(190);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << GreaterThan) | (1L << LessThanEquals) | (1L << GreaterThanEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(191);
						singleExpression(10);
						}
						break;
					case 4:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(192);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(193);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Equivalent) | (1L << StrictEquals) | (1L << NotEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(194);
						singleExpression(9);
						}
						break;
					case 5:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(195);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(196);
						match(And);
						setState(197);
						singleExpression(8);
						}
						break;
					case 6:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(198);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(199);
						match(Or);
						setState(200);
						singleExpression(7);
						}
						break;
					case 7:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(201);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(202);
						match(PlusPlus);
						}
						break;
					case 8:
						{
						_localctx = new PostDecrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(203);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(204);
						match(MinusMinus);
						}
						break;
					case 9:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(205);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(206);
						arguments();
						}
						break;
					}
					} 
				}
				setState(211);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	 
		public AssignmentOperatorContext() { }
		public void copyFrom(AssignmentOperatorContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MultiplyAssignOperatorContext extends AssignmentOperatorContext {
		public TerminalNode MultiplyAssign() { return getToken(ExtLogicParser.MultiplyAssign, 0); }
		public MultiplyAssignOperatorContext(AssignmentOperatorContext ctx) { copyFrom(ctx); }
	}
	public static class ModulusAssignOperatorContext extends AssignmentOperatorContext {
		public TerminalNode ModulusAssign() { return getToken(ExtLogicParser.ModulusAssign, 0); }
		public ModulusAssignOperatorContext(AssignmentOperatorContext ctx) { copyFrom(ctx); }
	}
	public static class PlusAssignOperatorContext extends AssignmentOperatorContext {
		public TerminalNode PlusAssign() { return getToken(ExtLogicParser.PlusAssign, 0); }
		public PlusAssignOperatorContext(AssignmentOperatorContext ctx) { copyFrom(ctx); }
	}
	public static class DivideAssignOperatorContext extends AssignmentOperatorContext {
		public TerminalNode DivideAssign() { return getToken(ExtLogicParser.DivideAssign, 0); }
		public DivideAssignOperatorContext(AssignmentOperatorContext ctx) { copyFrom(ctx); }
	}
	public static class MinusAssignOperatorContext extends AssignmentOperatorContext {
		public TerminalNode MinusAssign() { return getToken(ExtLogicParser.MinusAssign, 0); }
		public MinusAssignOperatorContext(AssignmentOperatorContext ctx) { copyFrom(ctx); }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_assignmentOperator);
		try {
			setState(217);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MultiplyAssign:
				_localctx = new MultiplyAssignOperatorContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(212);
				match(MultiplyAssign);
				}
				break;
			case DivideAssign:
				_localctx = new DivideAssignOperatorContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(213);
				match(DivideAssign);
				}
				break;
			case ModulusAssign:
				_localctx = new ModulusAssignOperatorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(214);
				match(ModulusAssign);
				}
				break;
			case PlusAssign:
				_localctx = new PlusAssignOperatorContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(215);
				match(PlusAssign);
				}
				break;
			case MinusAssign:
				_localctx = new MinusAssignOperatorContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(216);
				match(MinusAssign);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode BooleanLiteral() { return getToken(ExtLogicParser.BooleanLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(ExtLogicParser.StringLiteral, 0); }
		public TerminalNode DecimalLiteral() { return getToken(ExtLogicParser.DecimalLiteral, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << StringLiteral))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedContext extends ParserRuleContext {
		public TerminalNode ReservedKeyword() { return getToken(ExtLogicParser.ReservedKeyword, 0); }
		public ReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reserved; }
	}

	public final ReservedContext reserved() throws RecognitionException {
		ReservedContext _localctx = new ReservedContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_reserved);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(ReservedKeyword);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatementContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(ExtLogicParser.SemiColon, 0); }
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_emptyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IfKeyword() { return getToken(ExtLogicParser.IfKeyword, 0); }
		public TerminalNode OpenParenthesis() { return getToken(ExtLogicParser.OpenParenthesis, 0); }
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public TerminalNode CloseParenthesis() { return getToken(ExtLogicParser.CloseParenthesis, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ElseKeyword() { return getToken(ExtLogicParser.ElseKeyword, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			match(IfKeyword);
			setState(228);
			match(OpenParenthesis);
			setState(229);
			expressionStatement();
			setState(230);
			match(CloseParenthesis);
			setState(231);
			statement();
			setState(234);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(232);
				match(ElseKeyword);
				setState(233);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WhileKeyword() { return getToken(ExtLogicParser.WhileKeyword, 0); }
		public TerminalNode OpenParenthesis() { return getToken(ExtLogicParser.OpenParenthesis, 0); }
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public TerminalNode CloseParenthesis() { return getToken(ExtLogicParser.CloseParenthesis, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(WhileKeyword);
			setState(237);
			match(OpenParenthesis);
			setState(238);
			expressionStatement();
			setState(239);
			match(CloseParenthesis);
			setState(240);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(ExtLogicParser.Identifier, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 18:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 9);
		case 3:
			return precpred(_ctx, 8);
		case 4:
			return precpred(_ctx, 7);
		case 5:
			return precpred(_ctx, 6);
		case 6:
			return precpred(_ctx, 18);
		case 7:
			return precpred(_ctx, 17);
		case 8:
			return precpred(_ctx, 16);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3/\u00f7\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\3\2\5\2:\n\2\3\2\3\2\3\3\6\3?\n\3\r\3\16"+
		"\3@\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5Q\n\5\3"+
		"\6\3\6\5\6U\n\6\3\6\3\6\3\7\6\7Z\n\7\r\7\16\7[\3\b\3\b\3\b\5\ba\n\b\3"+
		"\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\5"+
		"\rt\n\r\3\r\3\r\3\r\3\16\3\16\3\16\7\16|\n\16\f\16\16\16\177\13\16\3\17"+
		"\3\17\3\20\3\20\5\20\u0085\n\20\3\20\3\20\3\21\3\21\5\21\u008b\n\21\3"+
		"\21\3\21\3\22\3\22\3\22\3\22\7\22\u0093\n\22\f\22\16\22\u0096\13\22\3"+
		"\22\5\22\u0099\n\22\5\22\u009b\n\22\3\22\3\22\3\23\3\23\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\5\24\u00b8\n\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\7\24\u00d2\n\24\f\24\16\24\u00d5\13\24\3\25"+
		"\3\25\3\25\3\25\3\25\5\25\u00dc\n\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31"+
		"\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\5\32\u00ed\n\32\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\3\34\3\34\3\34\2\3&\35\2\4\6\b\n\f\16\20\22\24\26\30\32"+
		"\34\36 \"$&(*,.\60\62\64\66\2\b\3\2%&\3\2\20\22\3\2\r\16\3\2\23\26\3\2"+
		"\27\31\4\2!\"..\2\u0106\29\3\2\2\2\4>\3\2\2\2\6B\3\2\2\2\bP\3\2\2\2\n"+
		"R\3\2\2\2\fY\3\2\2\2\16]\3\2\2\2\20b\3\2\2\2\22e\3\2\2\2\24i\3\2\2\2\26"+
		"k\3\2\2\2\30o\3\2\2\2\32x\3\2\2\2\34\u0080\3\2\2\2\36\u0082\3\2\2\2 \u0088"+
		"\3\2\2\2\"\u008e\3\2\2\2$\u009e\3\2\2\2&\u00b7\3\2\2\2(\u00db\3\2\2\2"+
		"*\u00dd\3\2\2\2,\u00df\3\2\2\2.\u00e1\3\2\2\2\60\u00e3\3\2\2\2\62\u00e5"+
		"\3\2\2\2\64\u00ee\3\2\2\2\66\u00f4\3\2\2\28:\5\4\3\298\3\2\2\29:\3\2\2"+
		"\2:;\3\2\2\2;<\7\2\2\3<\3\3\2\2\2=?\5\6\4\2>=\3\2\2\2?@\3\2\2\2@>\3\2"+
		"\2\2@A\3\2\2\2A\5\3\2\2\2BC\5\b\5\2C\7\3\2\2\2DQ\5\n\6\2EQ\5\22\n\2FQ"+
		"\5\16\b\2GQ\5.\30\2HQ\5\20\t\2IJ\5\60\31\2JK\7\b\2\2KQ\3\2\2\2LQ\5\62"+
		"\32\2MQ\5 \21\2NQ\5\30\r\2OQ\5\64\33\2PD\3\2\2\2PE\3\2\2\2PF\3\2\2\2P"+
		"G\3\2\2\2PH\3\2\2\2PI\3\2\2\2PL\3\2\2\2PM\3\2\2\2PN\3\2\2\2PO\3\2\2\2"+
		"Q\t\3\2\2\2RT\7\4\2\2SU\5\f\7\2TS\3\2\2\2TU\3\2\2\2UV\3\2\2\2VW\7\5\2"+
		"\2W\13\3\2\2\2XZ\5\b\5\2YX\3\2\2\2Z[\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\\r"+
		"\3\2\2\2]^\7*\2\2^`\7.\2\2_a\7\b\2\2`_\3\2\2\2`a\3\2\2\2a\17\3\2\2\2b"+
		"c\7+\2\2cd\7\b\2\2d\21\3\2\2\2ef\5\24\13\2fg\5\26\f\2gh\7\b\2\2h\23\3"+
		"\2\2\2ij\t\2\2\2j\25\3\2\2\2kl\5\66\34\2lm\7\n\2\2mn\5&\24\2n\27\3\2\2"+
		"\2op\7#\2\2pq\5\66\34\2qs\7\6\2\2rt\5\32\16\2sr\3\2\2\2st\3\2\2\2tu\3"+
		"\2\2\2uv\7\7\2\2vw\5\36\20\2w\31\3\2\2\2x}\5\34\17\2yz\7\t\2\2z|\5\34"+
		"\17\2{y\3\2\2\2|\177\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\33\3\2\2\2\177}\3\2"+
		"\2\2\u0080\u0081\5\66\34\2\u0081\35\3\2\2\2\u0082\u0084\7\4\2\2\u0083"+
		"\u0085\5\4\3\2\u0084\u0083\3\2\2\2\u0084\u0085\3\2\2\2\u0085\u0086\3\2"+
		"\2\2\u0086\u0087\7\5\2\2\u0087\37\3\2\2\2\u0088\u008a\7)\2\2\u0089\u008b"+
		"\5&\24\2\u008a\u0089\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u008c\3\2\2\2\u008c"+
		"\u008d\7\b\2\2\u008d!\3\2\2\2\u008e\u009a\7\6\2\2\u008f\u0094\5$\23\2"+
		"\u0090\u0091\7\t\2\2\u0091\u0093\5$\23\2\u0092\u0090\3\2\2\2\u0093\u0096"+
		"\3\2\2\2\u0094\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0098\3\2\2\2\u0096"+
		"\u0094\3\2\2\2\u0097\u0099\7\t\2\2\u0098\u0097\3\2\2\2\u0098\u0099\3\2"+
		"\2\2\u0099\u009b\3\2\2\2\u009a\u008f\3\2\2\2\u009a\u009b\3\2\2\2\u009b"+
		"\u009c\3\2\2\2\u009c\u009d\7\7\2\2\u009d#\3\2\2\2\u009e\u009f\5&\24\2"+
		"\u009f%\3\2\2\2\u00a0\u00a1\b\24\1\2\u00a1\u00a2\7\13\2\2\u00a2\u00b8"+
		"\5&\24\21\u00a3\u00a4\7\f\2\2\u00a4\u00b8\5&\24\20\u00a5\u00a6\7\16\2"+
		"\2\u00a6\u00b8\5&\24\17\u00a7\u00a8\7\17\2\2\u00a8\u00b8\5&\24\16\u00a9"+
		"\u00aa\5\66\34\2\u00aa\u00ab\7\n\2\2\u00ab\u00ac\5&\24\7\u00ac\u00b8\3"+
		"\2\2\2\u00ad\u00ae\5\66\34\2\u00ae\u00af\5(\25\2\u00af\u00b0\5&\24\6\u00b0"+
		"\u00b8\3\2\2\2\u00b1\u00b8\5\66\34\2\u00b2\u00b8\5*\26\2\u00b3\u00b4\7"+
		"\6\2\2\u00b4\u00b5\5&\24\2\u00b5\u00b6\7\7\2\2\u00b6\u00b8\3\2\2\2\u00b7"+
		"\u00a0\3\2\2\2\u00b7\u00a3\3\2\2\2\u00b7\u00a5\3\2\2\2\u00b7\u00a7\3\2"+
		"\2\2\u00b7\u00a9\3\2\2\2\u00b7\u00ad\3\2\2\2\u00b7\u00b1\3\2\2\2\u00b7"+
		"\u00b2\3\2\2\2\u00b7\u00b3\3\2\2\2\u00b8\u00d3\3\2\2\2\u00b9\u00ba\f\r"+
		"\2\2\u00ba\u00bb\t\3\2\2\u00bb\u00d2\5&\24\16\u00bc\u00bd\f\f\2\2\u00bd"+
		"\u00be\t\4\2\2\u00be\u00d2\5&\24\r\u00bf\u00c0\f\13\2\2\u00c0\u00c1\t"+
		"\5\2\2\u00c1\u00d2\5&\24\f\u00c2\u00c3\f\n\2\2\u00c3\u00c4\t\6\2\2\u00c4"+
		"\u00d2\5&\24\13\u00c5\u00c6\f\t\2\2\u00c6\u00c7\7\32\2\2\u00c7\u00d2\5"+
		"&\24\n\u00c8\u00c9\f\b\2\2\u00c9\u00ca\7\33\2\2\u00ca\u00d2\5&\24\t\u00cb"+
		"\u00cc\f\24\2\2\u00cc\u00d2\7\13\2\2\u00cd\u00ce\f\23\2\2\u00ce\u00d2"+
		"\7\f\2\2\u00cf\u00d0\f\22\2\2\u00d0\u00d2\5\"\22\2\u00d1\u00b9\3\2\2\2"+
		"\u00d1\u00bc\3\2\2\2\u00d1\u00bf\3\2\2\2\u00d1\u00c2\3\2\2\2\u00d1\u00c5"+
		"\3\2\2\2\u00d1\u00c8\3\2\2\2\u00d1\u00cb\3\2\2\2\u00d1\u00cd\3\2\2\2\u00d1"+
		"\u00cf\3\2\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2"+
		"\2\2\u00d4\'\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00dc\7\34\2\2\u00d7\u00dc"+
		"\7\35\2\2\u00d8\u00dc\7\36\2\2\u00d9\u00dc\7\37\2\2\u00da\u00dc\7 \2\2"+
		"\u00db\u00d6\3\2\2\2\u00db\u00d7\3\2\2\2\u00db\u00d8\3\2\2\2\u00db\u00d9"+
		"\3\2\2\2\u00db\u00da\3\2\2\2\u00dc)\3\2\2\2\u00dd\u00de\t\7\2\2\u00de"+
		"+\3\2\2\2\u00df\u00e0\7,\2\2\u00e0-\3\2\2\2\u00e1\u00e2\7\b\2\2\u00e2"+
		"/\3\2\2\2\u00e3\u00e4\5&\24\2\u00e4\61\3\2\2\2\u00e5\u00e6\7\'\2\2\u00e6"+
		"\u00e7\7\6\2\2\u00e7\u00e8\5\60\31\2\u00e8\u00e9\7\7\2\2\u00e9\u00ec\5"+
		"\b\5\2\u00ea\u00eb\7(\2\2\u00eb\u00ed\5\b\5\2\u00ec\u00ea\3\2\2\2\u00ec"+
		"\u00ed\3\2\2\2\u00ed\63\3\2\2\2\u00ee\u00ef\7$\2\2\u00ef\u00f0\7\6\2\2"+
		"\u00f0\u00f1\5\60\31\2\u00f1\u00f2\7\7\2\2\u00f2\u00f3\5\b\5\2\u00f3\65"+
		"\3\2\2\2\u00f4\u00f5\7-\2\2\u00f5\67\3\2\2\2\249@PT[`s}\u0084\u008a\u0094"+
		"\u0098\u009a\u00b7\u00d1\u00d3\u00db\u00ec";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}