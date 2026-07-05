import * as addressService from "./address.service.mjs";

/**
 * GET /api/addresses
 * Get all addresses of logged-in user
 */
export async function getAddresses(req, res) {
  try {
    const userId = req.user.id;

    const addresses = await addressService.getAddresses(userId);

    return res.status(200).json({
      success: true,
      data: addresses,
    });
  } catch (error) {
    console.error("Get Addresses Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch addresses",
    });
  }
}

/**
 * GET /api/addresses/:id
 * Get a single address
 */
export async function getAddressById(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const address = await addressService.getAddressById(userId, id);

    return res.status(200).json({
      success: true,
      data: address,
    });
  } catch (error) {
    console.error("Get Address Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * POST /api/addresses
 * Create a new address
 */
export async function createAddress(req, res) {
  try {
    const userId = req.user.id;

    const address = await addressService.createAddress(userId, req.body);

    return res.status(201).json({
      success: true,
      message: "Address created successfully",
      data: address,
    });
  } catch (error) {
    console.error("Create Address Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create address",
    });
  }
}

/**
 * PUT /api/addresses/:id
 * Update an address
 */
export async function updateAddress(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const updatedAddress = await addressService.updateAddress(
      userId,
      id,
      req.body,
    );

    return res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: updatedAddress,
    });
  } catch (error) {
    console.error("Update Address Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * DELETE /api/addresses/:id
 * Delete an address
 */
export async function deleteAddress(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const result = await addressService.deleteAddress(userId, id);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Delete Address Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
