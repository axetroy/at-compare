/**
 * Created by axetroy on 16-3-28.
 */

// var EXPRESSION_REG = /^([\w\$\.]+)\s*(in \$?scope)?\s*([\<\!\=\>]{1,3})\s*(['|"]?[\w\$\.]+['|"]?)\s*(in \$?scope)?[\s\;]*$/;
var EXPRESSION_REG = /^\s*(['|"]?[\w\$\.\-]+['|"]?)\s*(in\s*\$?scope)?\s*(\!\={1,2}|[<|>]\={0,2}|\={2,3})\s*(['|"]?[\w\$\.\-]+['|"]?)\s*(in\s*\$?scope)?[\s\;]*$/;

module.exports  = EXPRESSION_REG;