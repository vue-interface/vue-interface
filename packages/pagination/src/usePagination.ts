type Unit = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%' | 'ch' | 'ex' | 'cm' | 'mm' | 'in' | 'pt' | 'pc';
type NumericWithUnit = `${number}${Unit}`;
type CalcExpressionChar = number | '.' | '+' | '-' | '*' | '/' | '(' | ')' | '_'
type NonEmptyCalcContentString = `${CalcExpressionChar}${string}` | CalcExpressionChar;
type ValidCalc = `calc(${NonEmptyCalcContentString})`;
type ValidBracketContent = NumericWithUnit | ValidCalc;

export type PredeterminedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type PaginationSize = 
    | `pagination-${PredeterminedSize}`  // pagination-sm, pagination-md, etc.
    | `pagination-${number}`              // pagination-3, pagination-4, etc.
    | `pagination-[${ValidBracketContent}]`; // pagination-[16px], pagination-[1.5rem], etc.