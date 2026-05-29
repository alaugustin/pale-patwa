import React, { useEffect, useState } from 'react';
import Link from './../../Components/UI/Link/Link';
import { Link as Test } from 'react-router-dom';
import { AppContentData } from './../../Data/AppContent';
import { BlockElement } from './../../Components/UI/BlockLevel/BlockElement';
import Header from './../../Components/Organisms/Header/Header';
import Footer from './../../Components/Organisms/Footer/Footer';
import { Typography } from '../../Components/UI/Typography/Typography';





const {
  mainHeading,
  date,
  backToTopLabel,
  skipLinkLabel,
  skipLinkHref,
  backToTopAriaLabel
} = AppContentData.globalPageContent;

const {
  backToTopButton,
  appAllHolderClasses,
  headerContainerClasses,
  footerContainerClasses,
  backToTopIconClasses,
  skipLinkClasses,
  mainContainerClasses
} = AppContentData.uiClasses;

const chatParameters = `{
  "language_learning": {
    "target_language": "Saint Lucian Kweyol",
    "interface_language": "Kweyol, English, and French mixed",
    "pronoun_preference": "mwen",
    "fluency_tracking": true,
    "vocabulary_tracking": true,
    "weekly_report_day": "Dimanch"
  },
  "flashcards": {
    "format": "app-style (Anki/Quizlet)",
    "auto_add_from_conversation": true
  },
  "translation_settings": {
    "style": "natural and conversational",
    "include_grammar_breakdown": true,
    "include_pronunciation_help": true
  },
  "interaction": {
    "corrections_enabled": true,
    "interactive_learning": true,
    "cultural_context_enabled": true
  }
}`;

export default function ConfigureAiChat() {
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    document.title = 'Configure AI Chat for Learning Kweyol | Pale Kweyol';
  }, []);

  return (
    <>
      <Link
        linkHref={skipLinkHref}
        linkClasses={skipLinkClasses}
      >{skipLinkLabel}</Link>

      <BlockElement id='allHolder' variant='main' role="main" className={appAllHolderClasses}>
        <Header headerContainerClass={headerContainerClasses} mainHeading={mainHeading} />

        <Test
          to='/'
          className='inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100'
        >
          Back to Dictionary
        </Test>

        <Typography variant='h1' className='mt-6 text-3xl font-bold text-center'>
          Set Up a Kweyol Learning Chat on an AI platform
        </Typography>

        <Typography variant='h2' className='mt-6 text-3xl font-bold text-center'>
          Steps to Configure an AI Platform for Learning Saint Lucian Kwéyòl
        </Typography>

        <ol>
          <li><strong>Log into your AI platform</strong> and open a new chat or add
            the following configuration in the settings or slash commands:</li>
        </ol>

        <pre data-role="codeBlock" data-info="json" className="language-json json"><code>
          Saint Lucian Kweyol Tutor Skill

          Role: You are a Saint Lucian Kweyol learning and translation assistant for the
          user (Canada-based, Caribbean context), supporting both fluency growth and
          practical translation.

          Core rules:

          Dictionary-first always. Use the Saint Lucian Kweyol dictionary (2001
          SIL/Ministry of Education) as primary authority before outputting Kweyol.

          If a term is unverified, borrowed, or from another Creole variety, flag it with
          ⚠️ and explain; never assume silently.
          Preserve register and tone (formal, casual, slang, humorous, poetic) while
          staying Saint Lucian-specific.
          Distinguish written vs spoken forms when useful (example: mwen vs man), and
          explain why.
          If the user writes Kweyol, correct first, then explain grammar clearly.

          Default response format:

          - Corrected Kweyol sentence (if needed)
          - Final Kweyol translation
          - Word-by-word table: Kweyol | English | Etymology (French/other where known)
          - Short grammar notes (SVO, pronouns, tense/aspect, conjunctions)
          - Cultural/context note (Saint Lucian usage)
          - One short follow-up question, preferably in Kweyol

          Command behavior:

          - /translate: Translate input to Saint Lucian Kweyol, include one locally
          natural example sentence.
          - /newsdigest [language]: Produce Kweyol-first digest; inline translation
          language is English by default, French if requested, Kweyol-only if kweyol is
          passed.
          - /translations-table: or latest translation table: Show recent translation log with
          English meanings and etymology.
          - /vocabulary-count: Estimate known Kweyol vocabulary from conversation history.

          News preferences:

          - Prioritize Canadian local, Caribbean regional, politics, science, and
          technology.
          - For each story, include a mini dictionary gloss and flag any unverified
          vocabulary.

          Interaction style:

          - Mix English and Kweyol naturally for learning.
          - Be conversational, corrective, encouraging, and culturally grounded in Saint
          Lucia.
          - GPT-5.3-Code
        </code></pre>

        <ol>
          <li>Once the parameters are set, your AI platform should confirm.</li>
          <li>Usage within this chat session:
            <ul>
              <li>Chat in Kwéyòl (parameters can be edited to fit your needs).</li>
              <li>Translate words/phrases when typing:<br />
                <code>/translate [sample word or phrase]</code>
              </li>
              <li>Build a table for recently translated words when entering:<br />
                <code>/translations-table</code>
              </li>
              <li>Get an approximate vocabulary count based on the conversation
                history when typing:<br />
              <code>/vocabulary-count</code>
              </li>
            </ul>
          </li>
        </ol>




        {/* <div className='mx-auto max-w-4xl px-4 py-8'>
          <Test
            to='/'
            className='inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100'
          >
            Back to Dictionary
          </Test>

          <h1 className='mt-6 text-3xl font-bold'>
            Set Up a Kweyol Learning Chat on an AI platform
          </h1>

          <p className='mt-4 text-base'>
            This page is now rendered by React at the <strong>/ai-chat/configure</strong> route.
            Start a new AI chat conversation, paste the setup prompt below, then continue learning in that chat.
          </p>

          <ol className='mt-6 list-decimal space-y-3 pl-6'>
            <li>Open an AI chat platform and start a new chat.</li>
            <li>Paste this message before the JSON: &quot;Apply these chat parameters and confirm in Kweyol.&quot;</li>
            <li>Paste the JSON block below.</li>
            <li>Ask for corrections, translations, and vocabulary tracking in each session.</li>
          </ol>

          <section className='mt-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm'>
            <h2 className='text-lg font-semibold'>Chat Parameters</h2>
            <pre className='mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100'>
              <code>{chatParameters}</code>
            </pre>
          </section>
        </div> */}

        <Footer
          footerContainerClass={footerContainerClasses}
          currentYear={year}
          siteName={mainHeading}
        />
      </BlockElement>
    </>
  );
}
