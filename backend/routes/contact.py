# routes/contact.py

from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional 
from database.create_tables import SessionLocal
from database.models import ContactSubmission
from utils.timezone import ny_now_iso

router = APIRouter()

class ContactFormRequest(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    session_id: Optional[str] = None 

@router.post("/submit-contact/")
async def submit_contact_form(req: ContactFormRequest):
    session = SessionLocal()
    log = ContactSubmission(
        name=req.name,
        email=req.email,
        subject=req.subject,
        message=req.message,
        session_id=req.session_id,  # Save session ID
        timestamp=ny_now_iso()
    )
    session.add(log)
    session.commit()
    session.close()
    return {"message": "Contact submission logged successfully!"}
