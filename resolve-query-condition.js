/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "resolve-query-condition",
			"fileName": "resolve-query-condition.js",
			"moduleName": "resolveQueryCondition",
			"authorName": "Richeve Siodina Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/resolve-query-condition.git",
			"testCase": "resolve-query-condition-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:
	@end-module-documentation

	@include:
		{			
			"parse-query-condition@github.com/volkovasystems": "parseQueryCondition"
		}
	@end-include
*/
var resolveQueryCondition = function resolveQueryCondition( condition ){
	/*:
		@meta-configuration:
			{
				"condition:required": "string|object"
			}
		@end-meta-configuration
	*/

	if( typeof condition == "object" ){
		return condition;

	}else if( typeof condition == "string" ){
		return parseQueryCondition( condition );
		
	}else{
		var error = new Error( "invalid condition type" );
		console.error( error );
		throw error;
	}
};

var parseQueryCondition = require( "./parse-query-condition/parse-query-condition.js" );

module.exports = resolveQueryCondition;