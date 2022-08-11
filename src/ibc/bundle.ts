import * as _165 from "./applications/transfer/v1/genesis";
import * as _166 from "./applications/transfer/v1/query";
import * as _167 from "./applications/transfer/v1/transfer";
import * as _168 from "./applications/transfer/v1/tx";
import * as _169 from "./applications/transfer/v2/packet";
import * as _170 from "./core/channel/v1/channel";
import * as _171 from "./core/channel/v1/genesis";
import * as _172 from "./core/channel/v1/query";
import * as _173 from "./core/channel/v1/tx";
import * as _174 from "./core/client/v1/client";
import * as _175 from "./core/client/v1/genesis";
import * as _176 from "./core/client/v1/query";
import * as _177 from "./core/client/v1/tx";
import * as _178 from "./core/commitment/v1/commitment";
import * as _179 from "./core/connection/v1/connection";
import * as _180 from "./core/connection/v1/genesis";
import * as _181 from "./core/connection/v1/query";
import * as _182 from "./core/connection/v1/tx";
import * as _183 from "./core/port/v1/query";
import * as _184 from "./core/types/v1/genesis";
import * as _185 from "./lightclients/localhost/v1/localhost";
import * as _186 from "./lightclients/solomachine/v1/solomachine";
import * as _187 from "./lightclients/solomachine/v2/solomachine";
import * as _188 from "./lightclients/tendermint/v1/tendermint";
import * as _261 from "./applications/transfer/v1/query.rpc.query";
import * as _262 from "./core/channel/v1/query.rpc.query";
import * as _263 from "./core/client/v1/query.rpc.query";
import * as _264 from "./core/connection/v1/query.rpc.query";
import * as _265 from "./core/port/v1/query.rpc.query";
import * as _266 from "./applications/transfer/v1/tx.rpc.msg";
import * as _267 from "./core/channel/v1/tx.rpc.msg";
import * as _268 from "./core/client/v1/tx.rpc.msg";
import * as _269 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._165, ..._166, ..._167, ..._168, ..._261, ..._266 };
      export const v2 = { ..._169 };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._170, ..._171, ..._172, ..._173, ..._262, ..._267 };
    }
    export namespace client {
      export const v1 = { ..._174, ..._175, ..._176, ..._177, ..._263, ..._268 };
    }
    export namespace commitment {
      export const v1 = { ..._178 };
    }
    export namespace connection {
      export const v1 = { ..._179, ..._180, ..._181, ..._182, ..._264, ..._269 };
    }
    export namespace port {
      export const v1 = { ..._183, ..._265 };
    }
    export namespace types {
      export const v1 = { ..._184 };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._185 };
    }
    export namespace solomachine {
      export const v1 = { ..._186 };
      export const v2 = { ..._187 };
    }
    export namespace tendermint {
      export const v1 = { ..._188 };
    }
  }
}
