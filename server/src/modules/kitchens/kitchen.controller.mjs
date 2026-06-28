import * as kitchenService from "./kitchen.service.mjs";

export async function getAllKitchens(req, res, next) {
  try {
    const kitchens = await kitchenService.getAllKitchens();

    return res.status(200).json({
      success: true,
      data: kitchens,
    });
  } catch (error) {
    next(error);
  }
}

export async function getKitchenById(req, res, next) {
  try {
    const { id } = req.params;

    const kitchen = await kitchenService.getKitchenById(id);

    if (!kitchen) {
      return res.status(404).json({
        success: false,
        message: "Kitchen not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: kitchen,
    });
  } catch (error) {
    next(error);
  }
}
