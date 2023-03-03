import phrases from './phrases'

const { adjectives, nouns, verbs, particles, pronouns } = phrases

export default function generate() {
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const particle = particles[Math.floor(Math.random() * particles.length)];
  return { adjective, verb, noun };
}
