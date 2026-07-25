import * as orderService from "./order.service.mjs";

export async function getOrders(req, res) {
  try {
    const filters = {
      status: req.query.status,
      mealType: req.query.mealType,
    };

    const pagination = {
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
    };

    const sorting = {
      order: req.query.order || "asc",
    };

    const allowedStatuses = [
      "UPCOMING",
      "PREPARING",
      "OUT_FOR_DELIVERY",
      "DELIVERED",
      "CANCELLED",
    ];

    if (req.query.status && !allowedStatuses.includes(req.query.status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status.",
      });
    }

    const allowedMealTypes = ["LUNCH", "DINNER"];

    if (req.query.mealType && !allowedMealTypes.includes(req.query.mealType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid meal type.",
      });
    }

    const allowedOrders = ["asc", "desc"];

    if (req.query.order && !allowedOrders.includes(req.query.order)) {
      return res.status(400).json({
        success: false,
        message: "Invalid sort order.",
      });
    }

    if (pagination.page < 1 || pagination.limit < 1 || pagination.limit > 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid pagination values.",
      });
    }

    const { orders, total } = await orderService.getOrders(
      req.user.id,
      filters,
      pagination,
      sorting,
    );

    return res.status(200).json({
      success: true,
      data: orders,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total,
        totalPages: Math.ceil(total / pagination.limit),
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getOrderById(req, res) {
  try {
    const order = await orderService.getOrderById(req.params.id, req.user.id);

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function updateOrderStatus(req, res) {
  try {
    const order = await orderService.updateOrderStatus(
      req.params.id,
      req.user.id,
      req.body.status,
    );

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully.",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
