import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { MemoizedFunction } from 'lodash';
export declare type shimEntry = [string, IconPrefix | null, IconName | null];
/**
 * Method to get the shimmed icon name arrays in font-awesome 5
 * @param {String} nameV4 icon name in v4
 * @returns {Array} [ type, prefixed name ]
 */
declare const getShimFaName: ((nameV4: string) => [IconPrefix, IconName]) & MemoizedFunction;
export declare type MemoizedFunction = MemoizedFunction;
export default getShimFaName;
