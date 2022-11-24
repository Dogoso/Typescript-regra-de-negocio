import { View } from "./view.js";
export class MessageView extends View {
    template(model) {
        return `
            <p>${model}</p>
        `;
    }
}
