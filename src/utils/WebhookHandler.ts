export class WebhookHandler {
    private webhooks: Map<string, string>;

    constructor() {
        this.webhooks = new Map();
    }

    registerWebhook(event: string, url: string): void {
        this.webhooks.set(event, url);
    }

    async notify(event: string, payload: any): Promise<void> {
        const webhookUrl = this.webhooks.get(event);
        if (!webhookUrl) return;

        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        } catch (error) {
            console.error(`Webhook notification failed: ${error.message}`);
            throw error;
        }
    }
}
