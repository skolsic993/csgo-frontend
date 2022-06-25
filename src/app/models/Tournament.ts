export interface Tournament {
  competition_id: string,
  competition_type: string,
  name: string,
  game: string,
  region: string,
  organizer_id: string,
  organizer_name: string,
  organizer_type: string,
  status: string,
  started_at: number,
  prize_type: string,
  total_prize: string,
  players_joined: number,
  players_checkedin: number,
  slots: number
}