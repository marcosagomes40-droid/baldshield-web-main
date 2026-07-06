import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwrA99Uyr3o6lC-mbMTqL1jxZk0BEzNUKkqqyo1Muhx2Tn0UQHZT_jmkhPfBh4GADTPLw/exec";

const VipLeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        nome: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        assunto: "Lista VIP",
        mensagem: "Cadastro realizado pela página de Pré-lançamento.",
        origem: "pre-launch-vip",
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Bem-vindo à Lista VIP! 🎉",
        description:
          "Seu cadastro foi realizado com sucesso. Em breve você receberá novidades da BaldShield.",
      });

      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar na Lista VIP:", error);

      toast({
        title: "Erro",
        description:
          "Não foi possível concluir seu cadastro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>

        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>

        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
      >
        {isSubmitting ? (
          "Cadastrando..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Quero entrar para a Lista VIP
          </>
        )}
      </Button>
    </form>
  );
};

export default VipLeadForm;