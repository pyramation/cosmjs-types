import * as _187 from "./abci/types";
import * as _188 from "./abci/types";
import * as _189 from "./crypto/keys";
import * as _190 from "./crypto/proof";
import * as _191 from "./crypto/keys";
import * as _192 from "./crypto/proof";
import * as _193 from "./libs/bits/types";
import * as _194 from "./libs/bits/types";
import * as _195 from "./p2p/types";
import * as _196 from "./p2p/types";
import * as _197 from "./types/block";
import * as _198 from "./types/evidence";
import * as _199 from "./types/params";
import * as _200 from "./types/types";
import * as _201 from "./types/validator";
import * as _202 from "./types/block";
import * as _203 from "./types/evidence";
import * as _204 from "./types/params";
import * as _205 from "./types/types";
import * as _206 from "./types/validator";
import * as _207 from "./version/types";
import * as _208 from "./version/types";
export namespace tendermint {
  export const abci = { ..._187, ..._188 };
  export const crypto = { ..._189, ..._190, ..._191, ..._192 };
  export namespace libs {
    export const bits = { ..._193, ..._194 };
  }
  export const p2p = { ..._195, ..._196 };
  export const types = {
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._206,
  };
  export const version = { ..._207, ..._208 };
}
