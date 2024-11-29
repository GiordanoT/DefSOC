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
    public static extract(fullString: string, startString: string, endString: string): string[] {
        const results: string[] = [];
        let startIndex = 0;
        while (true) {
            startIndex = fullString.indexOf(startString, startIndex);
            if (startIndex === -1) break;
            startIndex += startString.length;
            const endIndex = fullString.indexOf(endString, startIndex);
            if (endIndex === -1) break;
            results.push(fullString.substring(startIndex, endIndex));
            startIndex = endIndex + endString.length;
        }
        return results;
    }
}
