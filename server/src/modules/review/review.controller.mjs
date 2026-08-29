import {
  createReviewService,
  getReviewByOrderIdService,
  updateReviewService,
  getKitchenReviewsService,
} from "./review.service.mjs";

export const createReview = async (req, res) => {
  try {
    const { orderId } = req.params;

    const userId = req.user.id;

    const review = await createReviewService(orderId, userId, req.body);

    return res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getReviewByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;

    const userId = req.user.id;

    const review = await getReviewByOrderIdService(orderId, userId);

    return res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { orderId } = req.params;

    const userId = req.user.id;

    const review = await updateReviewService(orderId, userId, req.body);

    return res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getKitchenReviews = async (req, res) => {
  try {
    const { kitchenId } = req.params;

    let { page = 1, limit = 10 } = req.query;

    page = Number(page);
    limit = Number(limit);

    const result = await getKitchenReviewsService(kitchenId, page, limit);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
