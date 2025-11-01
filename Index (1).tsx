import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-sunset)' }}>
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center space-y-4 p-8">
          <div className="text-6xl">🌇</div>
          <CardTitle className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            BlinkNote
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Your AI-powered note assistant for smarter, faster learning
          </p>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          <Button
            onClick={() => navigate("/auth")}
            className="w-full text-lg py-6"
            style={{ background: 'var(--gradient-coral)' }}
          >
            Get Started →
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📝</div>
              <p className="font-semibold">Text Summaries</p>
              <p className="text-sm text-muted-foreground">AI-powered text analysis</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🎤</div>
              <p className="font-semibold">Voice to Text</p>
              <p className="text-sm text-muted-foreground">Transcribe audio lectures</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📚</div>
              <p className="font-semibold">Smart Flashcards</p>
              <p className="text-sm text-muted-foreground">Generate study materials</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
