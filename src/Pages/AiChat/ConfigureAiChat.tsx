import React, { useEffect, useState } from 'react';
import Link from './../../Components/UI/Link/Link';
import { Link as RouterLink } from 'react-router-dom';
import { AppContentData } from './../../Data/AppContent';
import { BlockElement } from './../../Components/UI/BlockLevel/BlockElement';
import Header from './../../Components/Organisms/Header/Header';
import Footer from './../../Components/Organisms/Footer/Footer';
import { Typography } from '../../Components/UI/Typography/Typography';
import Button from '../../Components/UI/Form/Button/Button';

const { backToTopIcon } = AppContentData.icons;

const { mainHeading, date, skipLinkLabel, skipLinkHref } =
  AppContentData.globalPageContent;

const {
  appAllHolderClasses,
  headerContainerClasses,
  footerContainerClasses,
  skipLinkClasses,
} = AppContentData.uiClasses;

const aiTutorSkillPrompt = `Saint Lucian Kweyol Tutor Skill

Role: You are a Saint Lucian Kweyol learning and translation assistant for the user (Canada-based, Caribbean context), supporting both fluency growth and practical translation.

Core rules:

Dictionary-first always. Use the Saint Lucian Kweyol dictionary (2001 SIL/Ministry of Education) as primary authority before outputting Kweyol.

If a term is unverified, borrowed, or from another Creole variety, flag it with ⚠️ and explain; never assume silently. Preserve register and tone (formal, casual, slang, humorous, poetic) while staying Saint Lucian-specific. Distinguish written vs spoken forms when useful (example: mwen vs man), and explain why. If the user writes Kweyol, correct first, then explain grammar clearly.

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
- GPT-5.3-Code`;

export default function ConfigureAiChat() {
  const year = date.getFullYear();
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  );

  useEffect(() => {
    document.title = 'Configure AI Chat for Learning Kweyol | Pale Kweyol';
  }, []);

  const onCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(aiTutorSkillPrompt);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      setCopyState('error');
    }
  };

  return (
    <>
      <Link linkHref={skipLinkHref} linkClasses={skipLinkClasses}>
        {skipLinkLabel}
      </Link>

      <BlockElement
        id="allHolder"
        variant="main"
        role="main"
        className={appAllHolderClasses}
      >
        <Header
          headerContainerClass={headerContainerClasses}
          mainHeading={mainHeading}
        />

        <BlockElement
          variant="section"
          className="items-center justify-center flex-1 flex-col bg-slate-50 text-slate-800 pt-6 p-2 pb-7"
        >
          <Typography variant="h1" className="mt-6 text-3xl font-bold">
            Set Up a Kweyol Learning Chat on an AI platform
          </Typography>

          <Typography variant="h2" className="mt-6 text-2xl font-bold">
            Steps to Configure an AI Platform for Learning Saint Lucian Kwéyòl
          </Typography>

          <ol className="mt-6 mb-3 ml-6 list-decimal">
            <li>
              Log into your AI platform and open a new chat or add the following
              configuration in the settings or slash commands:
            </li>
          </ol>

          <BlockElement
            variant="div"
            className="mx-auto mt-4 w-full rounded-lg border border-slate-200 bg-white p-3 mb-4 flex flex-col items-end"
          >
            <BlockElement variant="div">
              <RouterLink
                to="/"
                className="inline-block rounded-full border border-slate-300 bg-white mb-3 px-3 py-1 text-xs font-semibold hover:bg-slate-200 align-self-end mr-2"
              >
                Back to Dictionary
              </RouterLink>

              <Button
                buttonLabel={
                  copyState === 'copied'
                    ? 'Copied'
                    : copyState === 'error'
                      ? 'Copy failed'
                      : 'Copy prompt'
                }
                onClickFunc={onCopyPrompt}
                buttonClass="mb-3 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold hover:bg-slate-200 align-self-end"
                ariaLabel="Copy AI tutor skill prompt"
              ></Button>
            </BlockElement>

            <pre
              data-role="codeBlock"
              data-info="text"
              className="overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-slate-900 p-4 text-sm text-slate-100"
            >
              <code>{aiTutorSkillPrompt}</code>
            </pre>
          </BlockElement>

          <ol start={2} className="mb-6 ml-6 list-decimal">
            <li>
              Once the parameters are set, your AI platform should confirm.
            </li>
            <li>
              Usage within this chat session:
              <ul className="ml-6 list-disc">
                <li>
                  Chat in Kwéyòl (parameters can be edited to fit your needs).
                </li>
                <li>
                  Translate words/phrases when typing:
                  <br />
                  <code className="font-bold">
                    /translate [sample word or phrase]
                  </code>
                </li>
                <li>
                  Build a table for recently translated words when entering:
                  <br />
                  <code className="font-bold">/translations-table</code>
                </li>
                <li>
                  Get an approximate vocabulary count based on the conversation
                  history when typing:
                  <br />
                  <code className="font-bold">/vocabulary-count</code>
                </li>
              </ul>
            </li>
          </ol>
        </BlockElement>

        <Footer
          footerContainerClass={footerContainerClasses}
          currentYear={year}
          siteName={mainHeading}
        />
      </BlockElement>
    </>
  );
}
