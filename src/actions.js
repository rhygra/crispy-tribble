import { createAction } from "@reduxjs/toolkit";
import { getEosInfo, getBlock } from "./api";

export const anAction = createAction("an_action");

export const getEosInfoSuccess = createAction("eos/getinfosuccess");
export const getEosInfoFailed = createAction("eos/getinfofailed");

export const fetchInfo = () => async dispatch => {
  try {
    const eosInfo = await getEosInfo();
    dispatch(getEosInfoSuccess(eosInfo));
    //console.log(eosInfo.head_block_num);
    dispatch(fetchBlock(eosInfo.head_block_num));
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
    dispatch(getBlockFailed(err));
  }
};

export const fetchAllBlocks = () => async dispatch => {
  //   try {
  //   }
};