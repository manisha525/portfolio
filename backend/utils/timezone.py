from datetime import datetime
from zoneinfo import ZoneInfo

NY = ZoneInfo("America/New_York")

def ny_now_iso() -> str:
    return datetime.now(NY).isoformat()

def ny_now() -> datetime:
    return datetime.now(NY)
