"use server";
import { ID } from "appwrite";
import databases from "./appwrite";
import { formConfig } from "./config";

export const formAction = async (formData: FormData) => {
	try {
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const subject = formData.get("subject") as string;
		const message = formData.get("message") as string;

		// Basic Validation (Optional)
		if (!name || !email || !subject || !message) {
			return { success: false, error: "All fields are required." };
		}

		const document = await databases.createDocument(
			formConfig.databaseId,
			formConfig.collectionId,
			ID.unique(),
			{ name, email, subject, message }
		);

		return { success: true, data: document };
	} catch (error: unknown) {
		console.error("Form Submission Error:", error);
		return { success: false, error: error instanceof Error ? error.message : "Failed to Submit Form" };
	}
};
