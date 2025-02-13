import { Expectation } from '@serenity-js/core';
import { ElementFinder } from 'protractor';
import { ElementFinderExpectation } from './ElementFinderExpectation';

/**
 * @desc
 *  Expectation that the element is present in the DOM of a page.
 *  Please note that this does not necessarily mean that the element is visible.
 *
 * @returns {@serenity-js/core/lib/screenplay/questions~Expectation<boolean, ElementFinder>}
 *
 * @see {@link @serenity-js/assertions~Ensure}
 * @see {@link @serenity-js/assertions~Check}
 * @see {@link Wait}
 */
export function isPresent(): Expectation<boolean, ElementFinder> {
    return ElementFinderExpectation.forElementTo('become present', actual => actual.isPresent());
}
