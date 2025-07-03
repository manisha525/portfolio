from .create_tables import engine, Base
from .models import GemAILog, ContactSubmission, PageVisit, SessionEvent, ErrorLog

def create_all_tables():
    Base.metadata.create_all(bind=engine)
