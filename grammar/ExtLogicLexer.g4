lexer grammar ExtLogicLexer;

SingleLineComment:              '//' ~[\r\n\u2028\u2029]* -> skip;

// Symbols

OpenBrace                   : '{' ;
CloseBrace                  : '}' ;
OpenParenthesis             : '(' ;
CloseParenthesis            : ')' ;
SemiColon                   : ';' ;
Comma                       : ',' ;
Assign                      : '=' ;
PlusPlus                    : '++' ;
MinusMinus                  : '--';
Plus                        : '+' ;
Minus                       : '-' ;
Not                         : '!' ;
Multiply                    : '*' ;
Divide                      : '/' ;
Modulus                     : '%' ;
LessThan                    : '<' ;
GreaterThan                 : '>' ;
LessThanEquals              : '<=' ;
GreaterThanEquals           : '>=' ;
Equivalent                  : '==' ;
StrictEquals                : '===' ;
NotEquals                   : '!=' ;
And                         : '&&' ;
Or                          : '||' ;
MultiplyAssign              : '*=' ;
DivideAssign                : '/=' ;
ModulusAssign               : '%=' ;
PlusAssign                  : '+=' ;
MinusAssign                 : '-=' ;

// Boolean Literals
BooleanLiteral              : 'true' | 'false' ;

// Numeric Literals
DecimalLiteral              : DecimalIntegerLiteral '.' [0-9] [0-9_]*
                            | DecimalIntegerLiteral
                            ;

// Keywords

FunctionKeyword             : 'function' ;
WhileKeyword                : 'while' ;
VariableKeyword             : 'var' ;
SetKeyword                  : 'set' ;
IfKeyword                   : 'if' ;
ElseKeyword                 : 'else' ;
ReturnKeyword               : 'return' ;
ImportKeyword               : 'import' ;
EndKeyword                  : 'end' ;
ReservedKeyword             : '$$' ;

// Identifier Names
Identifier                  : IdentifierStart IdentifierPart* ;

// String Literals
StringLiteral               : '"' DoubleStringCharacter* '"'
                            | '\'' SingleStringCharacter* '\''
                            ;

WS                          : [ \t\r\n]+ -> skip ;

fragment DoubleStringCharacter
    : ~["\\\r\n] ;

fragment SingleStringCharacter
    : ~['\\\r\n] ;

fragment DecimalIntegerLiteral
    : '0'
    | [1-9] [0-9_]*
    ;


fragment IdentifierPart
    : IdentifierStart
    | [\p{Mn}]
    | [\p{Nd}]
    | [\p{Pc}]
    ;

fragment IdentifierStart
    : [\p{L}]
    | [$_]
    | '@'
    ;