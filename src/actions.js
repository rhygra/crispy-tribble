import { createAction } from "@reduxjs/toolkit";
import { getEosInfo, getBlock, getAbi } from "./api";

export const getEosInfoStarted = createAction("eos/getinfostarted");
export const getEosInfoSuccess = createAction("eos/getinfosuccess");
export const getEosInfoFailed = createAction("eos/getinfofailed");

export const fetchInfo = () => async dispatch => {
  try {
    dispatch(getEosInfoStarted());
    const eosInfo = await getEosInfo();
    dispatch(getEosInfoSuccess(eosInfo));
  } catch (err) {
    dispatch(getEosInfoFailed(err));
  }
};

export const getBlockSuccess = createAction("eos/getblocksuccess");
export const getBlockFailed = createAction("eos/getblockfailed");

export const fetchBlock = blockNum => async dispatch => {
  try {
    const blockInfo = await getBlock(blockNum);
    dispatch(getBlockSuccess(blockInfo));
  } catch (err) {
    console.log("failed ", err);
    dispatch(getBlockFailed(blockNum));
  }
};

export const getAbiSuccess = createAction("eos/getabisuccess");
export const getAbiFailed = createAction("eos/getabifailed");

export const fetchAbi = accountName => async dispatch => {
  try {
    const abiInfo = await getAbi(accountName);
    dispatch(getAbiSuccess(abiInfo));
  } catch (err) {
    dispatch(getAbiFailed(err));
  }
};
