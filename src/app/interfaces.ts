export interface IVideo {
  videoId: string;
  player: any;
  title: string;
  status: 'onPlay' | 'onPause' | 'onStop';
}
