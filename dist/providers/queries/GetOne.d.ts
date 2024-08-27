import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database/FireClient';
export declare function GetOne<T extends ra.Record>(resourceName: string, params: ra.GetOneParams, client: FireClient): Promise<ra.GetOneResult<T>>;
