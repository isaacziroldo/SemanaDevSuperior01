export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTAION'

export type Game = {
    id: number;
    title: string;
    platform: GamePlatform;
    label: string;
    value: number;
}