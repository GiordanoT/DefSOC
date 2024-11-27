export default class U {
    static sleep(s: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }
}
