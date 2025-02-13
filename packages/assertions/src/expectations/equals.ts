import { Answerable, Expectation } from '@serenity-js/core';
import { equal } from 'tiny-types/lib/objects'; // tslint:disable-line:no-submodule-imports

export function equals<Expected>(expectedValue: Answerable<Expected>): Expectation<Expected> {
    return Expectation.thatActualShould<Expected, Expected>('equal', expectedValue)
        .soThat((actual, expected) => equal(actual, expected));
}
