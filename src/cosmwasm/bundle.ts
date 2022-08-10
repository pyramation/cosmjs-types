import * as _0 from "./wasm/v1/genesis";
import * as _1 from "./wasm/v1/ibc";
import * as _2 from "./wasm/v1/proposal";
import * as _3 from "./wasm/v1/query";
import * as _4 from "./wasm/v1/tx";
import * as _5 from "./wasm/v1/types";
import * as _209 from "./wasm/v1/query.rpc.query";
import * as _210 from "./wasm/v1/tx.rpc.msg";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._0, ..._1, ..._2, ..._3, ..._4, ..._5, ..._209, ..._210 };
  }
  export const ClientFactory = { ..._268, ..._269 };
}
