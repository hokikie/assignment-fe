import Qrcode from "../qrcode/qrcode";
import User from "../user/user";

export default interface requestDTO extends Qrcode, User {
  advertisementId: string | null;
}
