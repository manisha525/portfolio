from sqlalchemy import Column, Integer, String
from .create_tables import Base  # importing Base here

class GemAILog(Base):
    __tablename__ = "gemai_log"
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, nullable=True)
    timestamp = Column(String, nullable=False)
    question = Column(String, nullable=False)
    response = Column(String, nullable=False)
   
class ContactSubmission(Base):
    __tablename__ = "contact_submissions"
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, nullable=True)
    timestamp = Column(String, nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    subject = Column(String, nullable=False)
    message = Column(String, nullable=False)

class PageVisit(Base):
    __tablename__ = "page_visits"
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, nullable=True)
    timestamp = Column(String, nullable=False)
    page_name = Column(String, nullable=False)
    ip_address = Column(String, nullable=True)
    user_agent = Column(String, nullable=True)

class SessionEvent(Base):
    __tablename__ = "session_events"
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, nullable=True)
    timestamp = Column(String, nullable=False)
    event_type = Column(String, nullable=False)
    details = Column(String, nullable=True)

class ErrorLog(Base):
    __tablename__ = "error_logs"
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, nullable=True)
    timestamp = Column(String, nullable=False)
    error_message = Column(String, nullable=False)
    context = Column(String, nullable=True)
    
