import * as addressRepository from "./address.repository.mjs";

/**
 * Get all addresses of logged-in user
 */
export async function getAddresses(userId) {
  return await addressRepository.findAllByUserId(userId);
}

/**
 * Get address by ID
 */
export async function getAddressById(userId, addressId) {
  const address = await addressRepository.findById(addressId);

  if (!address) {
    throw new Error("Address not found");
  }

  if (address.userId !== userId) {
    throw new Error("Unauthorized access");
  }

  return address;
}

/**
 * Create address
 */
export async function createAddress(userId, data) {
  if (data.isDefault) {
    await addressRepository.unsetDefault(userId);
  }

  return await addressRepository.create({
    ...data,
    userId,
  });
}

/**
 * Update address
 */
export async function updateAddress(userId, addressId, data) {
  const address = await addressRepository.findById(addressId);

  if (!address) {
    throw new Error("Address not found");
  }

  if (address.userId !== userId) {
    throw new Error("Unauthorized access");
  }

  if (data.isDefault) {
    await addressRepository.unsetDefault(userId);
  }

  return await addressRepository.update(addressId, data);
}

/**
 * Delete address
 */
export async function deleteAddress(userId, addressId) {
  const address = await addressRepository.findById(addressId);

  if (!address) {
    throw new Error("Address not found");
  }

  if (address.userId !== userId) {
    throw new Error("Unauthorized access");
  }

  await addressRepository.remove(addressId);

  return {
    success: true,
    message: "Address deleted successfully",
  };
}
