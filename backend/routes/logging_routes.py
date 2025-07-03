# routes/logging_routes.py

from fastapi import APIRouter, Request
from datetime import datetime
from utils.timezone import ny_now_iso

from database.create_tables import SessionLocal
from database.models import PageVisit, SessionEvent, ErrorLog

router = APIRouter()

# page visit logging
@router.post("/log-page-visit/")
async def log_page_visit(request: Request):
    data = await request.json()
    page_name = data.get("page")
    user_agent = request.headers.get("user-agent")
    ip_address = request.client.host
    session_id = data.get("session_id") 


    session = SessionLocal()
    log = PageVisit(
        session_id=session_id,
        timestamp=ny_now_iso(),
        page_name=page_name,
        ip_address=ip_address,
        user_agent=user_agent
    )
    session.add(log)
    session.commit()
    session.close()
    return {"message": "Page visit logged"}


# session events logging
@router.post("/log-session-event/")
async def log_session_event(request: Request):
    data = await request.json()
    event_type = data.get("event")
    details = data.get("details", "")
    session_id = data.get("session_id")

    session = SessionLocal()
    log = SessionEvent(
        session_id=session_id, # store it
        timestamp=ny_now_iso(),
        event_type=event_type,
        details=details,
    )
    session.add(log)
    session.commit()
    session.close()
    return {"message": "Session event logged"}


# error logging
@router.post("/log-error/")
async def log_error(request: Request):
    data = await request.json()
    error_message = data.get("error")
    context = data.get("context", "")
    session_id = data.get("session_id") 


    session = SessionLocal()
    log = ErrorLog(
        session_id=session_id,
        timestamp=ny_now_iso(),
        error_message=error_message,
        context=context,
    )
    session.add(log)
    session.commit()
    session.close()
    return {"message": "Error logged"}
