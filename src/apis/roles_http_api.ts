import axios from "axios";
import { API } from "../config";
import { roledata } from "./jsondata";

export const RolesApis = async (method: any, reqdata: any) => {
  return await axios({
    method: method,
    url: `${API.roles}`,
  })
    .then((response) => {
      //return response;
      return roledata;
    })
    .catch((error) => {
      return error;
    });
};
