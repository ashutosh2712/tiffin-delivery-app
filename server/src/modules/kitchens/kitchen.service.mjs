import * as kitchenRepository from "./kitchen.repository.mjs";

export async function getAllKitchens() {
  return kitchenRepository.findAll();
}

export async function getKitchenById(id) {
  return kitchenRepository.findById(id);
}
