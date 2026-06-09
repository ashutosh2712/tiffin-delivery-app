import { Modal, Text, TouchableOpacity, View } from "react-native";

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  visible,
  title,
  message,
  confirmText,
  cancelText = "Cancel",
  destructive = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/40 items-center justify-center px-6">
        <View className="bg-white rounded-3xl w-full p-6">
          <Text className="text-xl font-semibold text-gray-900">{title}</Text>

          <Text className="text-gray-500 mt-3 leading-6">{message}</Text>

          {/* Buttons */}
          <View className="mt-8">
            {/* Confirm */}
            <TouchableOpacity
              onPress={onConfirm}
              className={`py-4 rounded-xl ${
                destructive ? "bg-red-500" : "bg-[#42CA82]"
              }`}
            >
              <Text className="text-center font-medium text-white">
                {confirmText}
              </Text>
            </TouchableOpacity>
            {/* Cancel */}
            <TouchableOpacity
              onPress={onCancel}
              className="bg-gray-100 py-4 rounded-xl mb-3"
            >
              <Text className="text-center font-medium text-gray-900">
                {cancelText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
