/************************************************
* This is an example localization page. All of these
* messages are the default messages for ko.validation
*
* Currently ko.validation does multiple parameter replacement
* on your message (indicated by the {0}, {1}, etc.).
*
* The parameters that you provide in your validation extender
* are what are passed to your message to do the {0}, {1} etc. replacements.
*
* eg: myProperty.extend({ minLength: 5 });
* ... will provide a message of "Please enter at least 5 characters"
* when validated
*
* eg: myProperty.extend({ between: [1, 5] });
* ... will provide a message of "Please enter between 1 and 5 characters"
* when validated
*
* This message replacement obviously only works with primitives
* such as numbers and strings. We do not stringify complex objects
* or anything like that currently.
*/
(function(factory) {
	// Module systems magic dance.
	/*global require,ko,define*/
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout"));
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko);
	}
}(function(ko) {
	if (!ko.validation && typeof ko.validation.localize !== 'function') {
		throw new Error('Knockout-Validation is required, please ensure it is loaded before this localization file');
	}
	ko.validation.localize({
		required: 'Моля, въведете стойност.',
		min: 'Моля, въведете стойност по-голяма или равна на {0}.',
		max: 'Моля, въведете стойност по-малка или равна на {0}.',
		minLength: 'Моля, въведете поне {0} символа.',
		maxLength: 'Моля, въведете по-малко от {0} символа.',
		pattern: 'Моля, проверете тази стойност.',
		step: 'Стойността трябва да се увеличава с {0}.',
		email: 'Това не е валиден e-mail адрес.',
		date: 'Моля, въведете валидна дата.',
		dateISO: 'Моля, въведете валидна дата.',
		number: 'Моля, въведете число.',
		digit: 'Моля, въведете цифра.',
		phoneUS: 'Моля, въведете валиден телефонен номер.',
		equal: 'Стойностите трябва да са равни.',
		notEqual: 'Моля, изберете различна стойност.',
		unique: 'Моля, убедете се, че стойността е уникална.'
	});
}));
