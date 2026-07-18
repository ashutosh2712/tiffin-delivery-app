import * as subscriptionService from "./subscription.service.mjs";

/**
 * POST /api/subscriptions
 */
export async function createSubscription(req, res) {
  try {
    const userId = req.user.id;

    const subscription = await subscriptionService.createSubscription(
      userId,
      req.body,
    );

    return res.status(201).json({
      success: true,
      message: "Subscription created successfully.",
      data: subscription,
    });
  } catch (error) {
    console.error("Create Subscription Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * GET /api/subscriptions/current
 */

export async function getCurrentSubscription(req, res) {
  try {
    const userId = req.user.id;
    const subscription =
      await subscriptionService.getCurrentSubscription(userId);
    return res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    console.error("Get Current Subscription Error:", error);
    return res.status(404).json({ success: false, message: error.message });
  }
}

/**
 * POST /api/subscriptions/:id/activate
 */
export async function activateSubscription(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const subscription = await subscriptionService.activateSubscription(
      userId,
      id,
    );

    return res.status(200).json({
      success: true,
      message: "Subscription activated successfully.",
      data: subscription,
    });
  } catch (error) {
    console.error("Activate Subscription Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * POST /subscriptions/:id/pause
 */
export async function pauseSubscription(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const subscription = await subscriptionService.pauseSubscription(
      userId,
      id,
      req.body,
    );

    return res.status(200).json({
      success: true,
      message: "Subscription paused successfully.",
      data: subscription,
    });
  } catch (error) {
    console.error("Pause Subscription Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * POST /api/subscriptions/:id/resume
 */
export async function resumeSubscription(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const subscription = await subscriptionService.resumeSubscription(
      userId,
      id,
    );

    return res.status(200).json({
      success: true,
      message: "Subscription resumed successfully.",
      data: subscription,
    });
  } catch (error) {
    console.error("Resume Subscription Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * POST /api/subscriptions/:id/cancel
 */
export async function cancelSubscription(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const subscription = await subscriptionService.cancelSubscription(
      userId,
      id,
    );

    return res.status(200).json({
      success: true,
      message: "Subscription cancelled successfully.",
      data: subscription,
    });
  } catch (error) {
    console.error("Cancel Subscription Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
