import UserRepo from "../repositories/user.repo";
import Validator from "simple-validator-node";
import Bcrypt from "../externals/encrypt";

class Base {

  protected readonly user = new UserRepo();
  protected readonly bcrypt = new Bcrypt();
  protected readonly validator = new Validator();

}

export default Base;