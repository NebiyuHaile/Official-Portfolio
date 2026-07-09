"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { operatorCommands } from "@/lib/content";

type LogLine = {
  command: string;
  response: string;
};

const defaultLog: LogLine[] = [
  {
    command: "boot",
    response: "trace console online · candidate signal ready",
  },
];

export default function OperatorTerminal() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<LogLine[]>(defaultLog);
  const reduceMotion = useReducedMotion();

  const commandMap = useMemo(
    () => new Map(operatorCommands.map((item) => [item.command, item.response])),
    []
  );

  function runCommand(rawCommand: string) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    const response =
      commandMap.get(command) ??
      `unknown command: ${command} · available: ${operatorCommands
        .map((item) => item.command)
        .join(", ")}`;

    setLog((current) => [...current.slice(-3), { command, response }]);
    setInput("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(input);
  }

  return (
    <motion.div
      className="operator-terminal"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="operator-terminal__bar">
        <span>operator.console</span>
        <span>interactive</span>
      </div>

      <div className="operator-terminal__log" aria-live="polite">
        {log.map((line, index) => (
          <motion.div
            key={`${line.command}-${index}`}
            className="operator-terminal__line"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <span className="operator-terminal__prompt">$ {line.command}</span>
            <span>{line.response}</span>
          </motion.div>
        ))}
      </div>

      <div className="operator-terminal__chips" aria-label="Run common commands">
        {operatorCommands.map((item) => (
          <button
            key={item.command}
            type="button"
            onClick={() => runCommand(item.command)}
          >
            {item.command}
          </button>
        ))}
      </div>

      <form className="operator-terminal__form" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="operator-command">
          Enter portfolio command
        </label>
        <span aria-hidden="true">$</span>
        <input
          id="operator-command"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="type command"
          autoComplete="off"
          spellCheck={false}
        />
        <button type="submit">run</button>
      </form>
    </motion.div>
  );
}
