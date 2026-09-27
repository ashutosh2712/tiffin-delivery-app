import {
  createPaymentOrderService,
  verifyPaymentService,
  getPaymentsForAll,
  getAllPaymentById,
} from "./payment.service.mjs";

export const createPaymentOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const { subscriptionId } = req.body;

    if (!subscriptionId) {
      return res.status(400).json({
        success: false,
        message: "subscriptionId is required",
      });
    }

    const result = await createPaymentOrderService(userId, subscriptionId);

    return res.status(201).json({
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

export const verifyPayment = async (req, res) => {
  try {
    const userId = req.user.id;

    const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

    if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification details are required.",
      });
    }

    const result = await verifyPaymentService(
      userId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    );

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

export async function getPayments(req, res) {
  try {
    const userId = req.user.id;

    const payments = await getPaymentsForAll(userId);

    return res.status(200).json({
      success: true,
      data: payments,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getPaymentById(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const payment = await getAllPaymentById(userId, id);

    return res.status(200).json({
      success: true,
      data: payment,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
