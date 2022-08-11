import * as _189 from "./abci/types";
import * as _190 from "./abci/types";
import * as _191 from "./crypto/keys";
import * as _192 from "./crypto/proof";
import * as _193 from "./crypto/keys";
import * as _194 from "./crypto/proof";
import * as _195 from "./libs/bits/types";
import * as _196 from "./libs/bits/types";
import * as _197 from "./p2p/types";
import * as _198 from "./p2p/types";
import * as _199 from "./types/block";
import * as _200 from "./types/evidence";
import * as _201 from "./types/params";
import * as _202 from "./types/types";
import * as _203 from "./types/validator";
import * as _204 from "./types/block";
import * as _205 from "./types/evidence";
import * as _206 from "./types/params";
import * as _207 from "./types/types";
import * as _208 from "./types/validator";
import * as _209 from "./version/types";
import * as _210 from "./version/types";
export namespace tendermint {
  export const abci = { ..._189, ..._190 };
  export const crypto = { ..._191, ..._192, ..._193, ..._194 };
  export namespace libs {
    export const bits = { ..._195, ..._196 };
  }
  export const p2p = { ..._197, ..._198 };
  export const types = {
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._206,
    ..._207,
    ..._208,
  };
  export const version = { ..._209, ..._210 };
}
