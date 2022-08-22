import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.evidence.v1beta1";

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height?: Long;
  time?: Timestamp;
  power?: Long;
  consensusAddress?: string;
}

function createBaseEquivocation(): Equivocation {
  return {
    height: undefined,
    time: undefined,
    power: undefined,
    consensusAddress: undefined,
  };
}

export const Equivocation = {
  encode(message: Equivocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== undefined) {
      writer.uint32(8).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }

    if (message.power !== undefined) {
      writer.uint32(24).int64(message.power);
    }

    if (message.consensusAddress !== undefined) {
      writer.uint32(34).string(message.consensusAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;

        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.power = reader.int64() as Long;
          break;

        case 4:
          message.consensusAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      power: isSet(object.power) ? Long.fromString(object.power) : undefined,
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : undefined,
    };
  },

  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || undefined).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.power !== undefined && (obj.power = (message.power || undefined).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Equivocation>, I>>(object: I): Equivocation {
    const message = createBaseEquivocation();
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : undefined;
    message.time =
      object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.power =
      object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : undefined;
    message.consensusAddress = object.consensusAddress ?? undefined;
    return message;
  },
};
