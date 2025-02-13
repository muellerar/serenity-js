import { PropertyPathKey } from './PropertyPathKey';

/**
 * @package
 * @param {PropertyPathKey} keyName
 */
export function key(keyName: PropertyPathKey) {
    return {
        isOneOf<T extends object = object>(...keys: Array<keyof T>) {
            return !!~keys.indexOf(keyName as any);
        }
    }
}
