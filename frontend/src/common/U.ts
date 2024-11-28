export default class U {
    static generateRandomRGB(): string {
        const randomValue = () => Math.floor(Math.random() * 256);
        const r = randomValue();
        const g = randomValue();
        const b = randomValue();
        return `rgba(${r}, ${g}, ${b}, 0.85)`;
    };
    public static sleep(s: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }
}
