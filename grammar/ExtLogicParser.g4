parser grammar ExtLogicParser;

options {
    tokenVocab = ExtLogicLexer;
}

program
    : sourceElements? EOF
    ;

sourceElements
    : sourceElement+
    ;

sourceElement
    : statement
    ;

statement
    : block
    | variableStatement
    | importStatement
    | emptyStatement
    | endStatement
    | expressionStatement SemiColon
    | ifStatement
    | returnStatement
    | functionDeclaration
    | whileStatement
    ;

block
    : '{' statementList? '}'
    ;

statementList
    : (statement)+
    ;

importStatement
    : ImportKeyword StringLiteral SemiColon?
    ;

endStatement
    : EndKeyword SemiColon
    ;

variableStatement
    : variableModifier variableDeclaration SemiColon
    ;

variableModifier
    : SetKeyword
    | VariableKeyword
    ;

variableDeclaration
    : identifier Assign singleExpression
    ;

functionDeclaration
    : FunctionKeyword identifier OpenParenthesis formalParameterList? CloseParenthesis functionBody
    ;

formalParameterList
    : formalParameterArg (Comma formalParameterArg)*
    ;

formalParameterArg
    : identifier
    ;

functionBody
    : OpenBrace sourceElements? CloseBrace
    ;

returnStatement
    : ReturnKeyword singleExpression? SemiColon
    ;

arguments
    : OpenParenthesis (argument (Comma argument)* Comma?)? CloseParenthesis
    ;

argument
    : singleExpression
    ;

singleExpression
    : singleExpression PlusPlus                                                         # PostIncrementExpression
    | singleExpression MinusMinus                                                       # PostDecrementExpression
    | singleExpression arguments                                                        # ArgumentsExpression
    | PlusPlus singleExpression                                                         # PreIncrementExpression
    | MinusMinus singleExpression                                                       # PreDecrementExpression
    | Minus singleExpression                                                            # UnaryMinusExpression
    | Not singleExpression                                                              # NotExpression
    | singleExpression (Multiply | Divide | Modulus) singleExpression                   # MultiplicativeExpression
    | singleExpression (Plus | Minus) singleExpression                                  # AdditiveExpression
    | singleExpression
        (LessThan | GreaterThan | LessThanEquals | GreaterThanEquals) singleExpression  # RelationalExpression
    | singleExpression (Equivalent | NotEquals | StrictEquals) singleExpression         # EqualityExpression
    | singleExpression And singleExpression                                             # LogicalAndExpression
    | singleExpression Or singleExpression                                              # LogicalOrExpression
    | <assoc=right> identifier Assign singleExpression                                  # AssignmentExpression
    | <assoc=right> identifier assignmentOperator singleExpression                      # AssignmentOperatorExpression
    | identifier                                                                        # IdentifierExpression
    | literal                                                                           # LiteralExpression
    | OpenParenthesis singleExpression CloseParenthesis                                 # ParenthesizedExpression
    ;

assignmentOperator
    : MultiplyAssign        # MultiplyAssignOperator
    | DivideAssign          # DivideAssignOperator
    | ModulusAssign         # ModulusAssignOperator
    | PlusAssign            # PlusAssignOperator
    | MinusAssign           # MinusAssignOperator
    ;

literal
    : BooleanLiteral
    | StringLiteral
    | DecimalLiteral
    ;

reserved
    : ReservedKeyword
    ;

emptyStatement
    : SemiColon
    ;

expressionStatement
    : singleExpression
    ;

ifStatement
    : IfKeyword OpenParenthesis expressionStatement CloseParenthesis statement (ElseKeyword statement)?
    ;

whileStatement
    : WhileKeyword OpenParenthesis expressionStatement CloseParenthesis statement
    ;

identifier
    : Identifier
    ;